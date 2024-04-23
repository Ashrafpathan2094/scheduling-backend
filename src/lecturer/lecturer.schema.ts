import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LecturerDocument = HydratedDocument<Lecturer>;

@Schema({
  timestamps: true,
})
export class Lecturer {
  @Prop({ required: true })
  name: string;

  @Prop({ unique: true })
  email: string;
}
export const LecturerSchema = SchemaFactory.createForClass(Lecturer);
