import { Controller, Post, Body } from '@nestjs/common';
import { BatchesService } from './batches.service';
import { CreateBatchDto, courseIdWhileFindAll } from './dto/create-batch.dto';
import { ObjectId, Types } from 'mongoose';

@Controller('batches')
export class BatchesController {
  constructor(private readonly batchesService: BatchesService) {}

  @Post()
  create(@Body() createBatchDto: CreateBatchDto) {
    try {
      const courseID = new Types.ObjectId(createBatchDto.courseId);
      const body = { ...createBatchDto, courseId: courseID };
      return this.batchesService.create(body);
    } catch (error) {
      console.log('error', error.message);
      throw new Error(error.message);
    }
  }

  @Post('/findAll')
  async findAll(@Body() courseIdWhileFindAll: courseIdWhileFindAll) {
    try {
      const courseID = new Types.ObjectId(courseIdWhileFindAll.courseId);

      const course = await this.batchesService.findById(courseID);
      if (!course) {
        throw new Error('Course is not fetched by provided Id');
      }
      const batchList = await this.batchesService.findAll(courseID);
      return {
        course,
        batchList,
      };
    } catch (error) {
      console.log('error', error.message);
      throw new Error(error.message);
    }
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.batchesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBatchDto: UpdateBatchDto) {
  //   return this.batchesService.update(+id, updateBatchDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.batchesService.remove(+id);
  // }
}
