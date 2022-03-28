import * as mongoose from 'mongoose';

export const MatchSchema = new mongoose.Schema({
  userUUID: String,
  likes: [String],
  dislikes: [String],
});
