import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CoursesDocument = HydratedDocument<Courses>;

@Schema({
  timestamps: true,
})
export class Courses {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  level: number;

  @Prop()
  description: string;

  @Prop()
  image: string;
}
export const CoursesSchema = SchemaFactory.createForClass(Courses);
