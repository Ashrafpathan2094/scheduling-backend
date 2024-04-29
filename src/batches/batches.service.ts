import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Types } from 'mongoose';
import { CoursesDocument } from 'src/courses/courses.schema';
import { BatchesDocument } from './batches.schema';
import { CreateBatchDto } from './dto/create-batch.dto';

@Injectable()
export class BatchesService {
  constructor(
    @InjectModel('Batches')
    private batchesModel: Model<BatchesDocument>,
    @InjectModel('Courses')
    private CoursesModel: Model<CoursesDocument>,
  ) {}
  async create(createBatchDto: CreateBatchDto) {
    const { batchName, courseId, start, end } = createBatchDto;
    // Check if there are any existing batches with the same name and overlapping time slot
    const existingBatch = await this.batchesModel.findOne({
      batchName,
      start: { $lt: end },
      end: { $gt: start },
    });

    if (existingBatch) {
      throw new BadRequestException(
        'A batch with the same name and overlapping time slot already exists.',
      );
    }

    // Proceed with batch creation if no conflicts found

    const courseID = new Types.ObjectId(courseId);
    const body = { ...createBatchDto, courseId: courseID };
    return this.batchesModel.create(body);
  }

  findAll(courseId: mongoose.Types.ObjectId) {
    return this.batchesModel.find({ courseId }).sort({ createdAt: -1 });
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
