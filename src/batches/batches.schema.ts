import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type BatchesDocument = HydratedDocument<Batches>;

@Schema({
  timestamps: true,
})
export class Batches {
  @Prop({ required: true })
  batchName: string;

  @Prop({ required: true, type: Types.ObjectId })
  courseId: Types.ObjectId;

  @Prop({ required: true })
  start: string;

  @Prop({ required: true })
  end: string;
}
export const BatchesSchema = SchemaFactory.createForClass(Batches);
