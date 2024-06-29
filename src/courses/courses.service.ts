import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCourseDto } from './dto/create-course.dto';
// import { UpdateCourseDto } from './dto/update-course.dto';
import { CoursesDocument } from './courses.schema';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel('Courses')
    private CoursesModel: Model<CoursesDocument>,
  ) {}
  async create(createCourseDto: CreateCourseDto): Promise<CoursesDocument> {
    const createdCourse = new this.CoursesModel(createCourseDto);
    return createdCourse.save();
  }

  findAll() {
    return this.CoursesModel.find({}).sort({ createdAt: -1 });
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  // update(id: number, updateCourseDto: UpdateCourseDto) {
  //   return `This action updates a #${id} course`;
  // }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
