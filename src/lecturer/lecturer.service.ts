import { Injectable } from '@nestjs/common';
import { CreateLecturerDto } from './dto/create-lecturer.dto';
import { UpdateLecturerDto } from './dto/update-lecturer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { LecturerDocument } from './entities/lecturer.entity';
import { Model } from 'mongoose';

@Injectable()
export class LecturerService {
  constructor(
    @InjectModel('lecturer') private Lecturer: Model<LecturerDocument>,
  ) {}

  create(createLecturerDto: CreateLecturerDto) {
    const { name, email } = createLecturerDto;

    // Validate name and email here if needed

    const newLecturer = new this.Lecturer({
      name,
      email,
    });

    return newLecturer.save();
  }

  findAll() {
    return `This action returns all lecturer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lecturer`;
  }

  update(id: number, updateLecturerDto: UpdateLecturerDto) {
    return `This action updates a #${id} lecturer`;
  }

  remove(id: number) {
    return `This action removes a #${id} lecturer`;
  }
}
