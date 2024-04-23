import { Controller, Get, Post, Body } from '@nestjs/common';
import { SchedulingService } from './scheduling.service';
import { CreateSchedulingDto } from './dto/create-scheduling.dto';
import { Types } from 'mongoose';
// import { UpdateSchedulingDto } from './dto/update-scheduling.dto';

@Controller('scheduling')
export class SchedulingController {
  constructor(private readonly schedulingService: SchedulingService) {}

  @Post()
  async create(@Body() createSchedulingDto: CreateSchedulingDto) {
    try {
      const instructorId = new Types.ObjectId(createSchedulingDto.instructorId);

      const result = await this.schedulingService.find({
        instructorId: instructorId,
        date: createSchedulingDto.date,
      });
      console.log('result', result);
      if (result) {
        return {
          success: false,
          code: 201,
          message: 'Instructor is already assigned to that batch date',
        };
      }
      this.schedulingService.create(createSchedulingDto);
      return {
        success: true,
        code: 200,
        message: 'Batch scheduled successfully',
      };
    } catch (error) {
      return {
        success: false,
        code: 400,
        message: 'Internal Server Error',
      };
      console.log('error', error);
    }
  }

  @Get()
  findAll() {
    return this.schedulingService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.schedulingService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSchedulingDto: UpdateSchedulingDto) {
  //   return this.schedulingService.update(+id, updateSchedulingDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.schedulingService.remove(+id);
  // }
}
