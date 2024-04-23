import { Injectable } from '@nestjs/common';
import { CreateLecturerDto } from './dto/create-lecturer.dto';
// import { UpdateLecturerDto } from './dto/update-lecturer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LecturerDocument } from './lecturer.schema';

@Injectable()
export class LecturerService {
  constructor(
    @InjectModel('Lecturer')
    private LecturerModel: Model<LecturerDocument>,
  ) {}
  create(createLecturerDto: CreateLecturerDto) {
    console.log(
      '🚀 ~ LecturerService ~ create ~ createLecturerDto:',
      createLecturerDto,
    );
    return this.LecturerModel.create(createLecturerDto);
  }

  findAll() {
    return this.LecturerModel.find({}).sort({ createdAt: -1 });
  }

  findOne(id: number) {
    return `This action returns a #${id} lecturer`;
  }

  // update(id: number, updateLecturerDto: UpdateLecturerDto) {
  //   return `This action updates a #${id} lecturer`;
  // }

  remove(id: number) {
    return `This action removes a #${id} lecturer`;
  }
}
