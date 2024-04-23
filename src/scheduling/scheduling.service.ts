import { Injectable } from '@nestjs/common';
import { CreateSchedulingDto } from './dto/create-scheduling.dto';
// import { UpdateSchedulingDto } from './dto/update-scheduling.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { SchedulingDocument } from './scheduling.schema';

@Injectable()
export class SchedulingService {
  constructor(
    @InjectModel('Scheduling')
    private SchedulingModel: Model<SchedulingDocument>,
  ) {}
  create(createSchedulingDto: CreateSchedulingDto) {
    const courseId = new Types.ObjectId(createSchedulingDto.courseId);
    const instructorId = new Types.ObjectId(createSchedulingDto.instructorId);
    const batchId = new Types.ObjectId(createSchedulingDto.batchId);

    const body = { ...createSchedulingDto, courseId, batchId, instructorId };
    return this.SchedulingModel.create(body);
  }

  find(filter) {
    return this.SchedulingModel.findOne(filter);
  }

  findAll() {
    return this.SchedulingModel.aggregate([
      {
        $match: {},
      },
      // Lookup with the courses collection based on courseId
      {
        $lookup: {
          from: 'courses',
          localField: 'courseId',
          foreignField: '_id',
          as: 'courseDetails',
        },
      },

      // Lookup with the batches collection based on batchId
      {
        $lookup: {
          from: 'batches',
          localField: 'batchId',
          foreignField: '_id',
          as: 'batchDetails',
        },
      },

      // Lookup with the instructors collection based on instructorId
      {
        $lookup: {
          from: 'lecturers',
          localField: 'instructorId',
          foreignField: '_id',
          as: 'instructorDetails',
        },
      },
    ]);
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} scheduling`;
  // }

  // update(id: number, updateSchedulingDto: UpdateSchedulingDto) {
  //   return `This action updates a #${id} scheduling`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} scheduling`;
  // }
}
