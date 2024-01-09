import { Request, Response } from 'express';
import crypto from 'crypto';
import jwt, { Jwt } from 'jsonwebtoken';

import { User } from '../models/user-model';
import { BadRequestError } from '../errors';
import { PasswordManager } from '../services';
import { IContext } from '../types/userModalType';

const resetPassword = async (
  arg: { token: string; newPassword: string; confirmNewPassword: string },
  context: IContext
) => {
  const { req, res } = context;
  const {token, newPassword, confirmNewPassword } = arg;

  // 1) Get user based on the token
  const hashedToken = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex');
  
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  // 2) If token has not expired, and there is user, set the new password
  if (!user) {
    throw new BadRequestError('Token is invalid or has expired');
  }

  const isNewPasswordSameWithOldPassword = await PasswordManager.compare(
    user.password,
    newPassword
  );

  if (isNewPasswordSameWithOldPassword) {
    throw new BadRequestError(
      'New password cannot be the same with old password'
    );
  }

  const passwordMatch = await PasswordManager.isMatchPasswords(
    newPassword,
    confirmNewPassword
  );
  if (!passwordMatch) {
    throw new BadRequestError('Passwords do not match');
  }

  const hashedPassword = await PasswordManager.toHash(newPassword);
  const hashedConfirmPassword = await PasswordManager.toHash(confirmNewPassword);

  user.password = hashedPassword;
  user.confirmPassword = hashedConfirmPassword;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  // 3) Update passwordChangedAt property for the user
  user.passwordChangedAt = await PasswordManager.newChangePasswordAt();
  await User.findByIdAndUpdate(user.id, user, {
    new: true,
    runValidators: true,
  });

  // 4) Log the user in, send JWT
  const userJwt: Jwt | string = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_KEY!
  );
  req.session = {
    jwt: userJwt,
  };

  res.status(200).json({
    message: 'You have successfully reset your password',
    data: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
    token: userJwt,
  });
};

export default resetPassword;
