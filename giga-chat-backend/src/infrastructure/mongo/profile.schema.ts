import * as mongoose from 'mongoose';

export const ProfileSchema = new mongoose.Schema({
  name: String,
  gender: String,
  age: Number,
});
