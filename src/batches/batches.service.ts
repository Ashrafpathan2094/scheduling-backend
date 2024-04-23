import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, ObjectId } from 'mongoose';
import { BatchesDocument } from './batches.schema';
import { CoursesDocument } from 'src/courses/courses.schema';

@Injectable()
export class BatchesService {
  constructor(
    @InjectModel('Batches')
    private BatchesModel: Model<BatchesDocument>,
    @InjectModel('Courses')
    private CoursesModel: Model<CoursesDocument>,
  ) {}
  create(body: any) {
    return this.BatchesModel.create(body);
  }

  findAll(courseId: mongoose.Types.ObjectId) {
    return this.BatchesModel.find({ courseId });
  }

  findById(id: mongoose.Types.ObjectId) {
    console.log('id', id);
    return this.CoursesModel.findById({ _id: id });
  }

  // update(id: number, updateBatchDto: UpdateBatchDto) {
  //   return `This action updates a #${id} batch`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} batch`;
  // }
}
