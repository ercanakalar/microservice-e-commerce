import mongoose from 'mongoose';

export interface ProfileAttrs {
  firstName: string;
  lastName: string;
  email: string;
  photo: string;
  active: boolean;
}

export interface ProfileModal extends mongoose.Model<ProfileDoc> {
  build(attrs: ProfileAttrs): ProfileDoc;
}

export interface ProfileDoc extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  photo: string;
  createdAt: Date;
  updatedAt: Date;
}
