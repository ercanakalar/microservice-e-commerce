import mongoose from 'mongoose';

export interface UserAttrs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  passwordResetToken?: string | undefined;
  passwordResetExpires?: Date | undefined;
  passwordChangedAt?: Date | undefined;
}

export interface UserModal extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

export interface UserDoc extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  createdAt: Date;
  updatedAt: Date;
  passwordChangedAt: Date | number;
  passwordResetToken: string | undefined;
  passwordResetExpires: Date | undefined;
  changedPasswordAfter(JWTTimestamp: number): boolean;
  createPasswordResetToken(): string;
}
