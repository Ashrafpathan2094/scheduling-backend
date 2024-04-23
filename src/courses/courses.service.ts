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
  create(createCourse: CreateCourseDto) {
    console.log('🚀 ~ CoursesService ~ create ~ createCourse:', createCourse);
    return this.CoursesModel.create(createCourse);
  }

  findAll() {
    return this.CoursesModel.find({});
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
