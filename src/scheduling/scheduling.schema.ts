import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type SchedulingDocument = HydratedDocument<Scheduling>;

@Schema({
  timestamps: true,
})
export class Scheduling {
  @Prop({ required: true })
  courseId: mongoose.Types.ObjectId;

  @Prop({ required: true })
  batchId: mongoose.Types.ObjectId;

  @Prop({ required: true })
  instructorId: mongoose.Types.ObjectId;

  @Prop({ required: true })
  date: string;
}
export const SchedulingSchema = SchemaFactory.createForClass(Scheduling);
