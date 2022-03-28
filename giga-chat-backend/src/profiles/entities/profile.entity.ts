import { Document } from 'mongoose';

export class Profile extends Document {
  readonly name: string;
  readonly gender: string;
  readonly age: number;
}
