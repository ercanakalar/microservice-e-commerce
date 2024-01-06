import { ID } from 'graphql-ws';

export type User = {
  id: ID;
  firstName: string;
  lastName: string;
  email: string;
};

export type UserSignIn = {
  email: string;
  password: string;
};

export type UserSignUp = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type UserResponse = {
  message: string;
  user: User;
  token: string;
};