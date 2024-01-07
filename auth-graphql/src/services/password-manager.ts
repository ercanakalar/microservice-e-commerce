import crypto, { scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';
import jwt, { Jwt } from 'jsonwebtoken';

const scryptAsync = promisify(scrypt);

export class PasswordManager {
  static async toHash(password: string) {
    const salt = randomBytes(8).toString('hex');
    const buf = (await scryptAsync(password, salt, 64)) as Buffer;

    return `${buf.toString('hex')}.${salt}`;
  }

  static async compare(storedPassword: string, suppliedPassword: string) {
    const [hashedPassword, salt] = storedPassword.split('.');
    const buf = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer;

    return buf.toString('hex') === hashedPassword;
  }

  static async isMatchPasswords(password: string, confirmPassword: string) {
    return password === confirmPassword;
  }

  static async hashExpireToken() {
    const time = Date.now() + Number(process.env.USER_EXPIRES_IN!);
    // const time = Date.now() + 1000;
    const expireToken = jwt.sign(
      {
        time,
      },
      process.env.JWT_KEY!
    );
    return expireToken;
  }

  static async isExpired(userExpiredToken: string) {
    const hashedToken: any = jwt.decode(userExpiredToken);
    const time = hashedToken.time;
    const date = new Date(time);
    const now = Date.now();
    if (now < date.getTime()) {
      return false
    } else {
      return true
    }
  }
}
