import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LecturerDocument = HydratedDocument<Lecturer>;
export class Lecturer {
  @Prop({ required: true })
  name: string;

  @Prop({ lowercase: true, unique: true, required: true })
  email: string;
}

export const LecturerSchema = SchemaFactory.createForClass(Lecturer);
