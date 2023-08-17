import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto.ts';
import { UpdateCourseDto } from './dto/update-course.dto.ts';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  //findOne(@Param() params) {
  //  return `Curso #${params.id}`;
  //}
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @Post()
  //utilizar o comando HttpStatus, ele libera uma biblioteca com os status HTTP possiveis
  @HttpCode(HttpStatus.NO_CONTENT)
  //ao colocar informação de parâmetros no @Body, ele retorna a informação defnida de parâmetro apenas
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
