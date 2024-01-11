import mongoose from 'mongoose';
import crypto from 'crypto';

import {
  ProfileAttrs,
  ProfileModal,
  ProfileDoc,
} from '../types/index';

const profileSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: 'default.jpg',
    },
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    },
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

profileSchema.statics.build = (attrs: ProfileAttrs) => {
  return new Profile(attrs);
};

const Profile = mongoose.model<ProfileDoc, ProfileModal>(
  'Profile',
  profileSchema
);

export { Profile };
