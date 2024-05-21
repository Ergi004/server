import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { LawsService } from './laws.service';
import { CreateLawDto } from './dto/create-law.dto';
import { UpdateLawDto } from './dto/update-law.dto';

@Controller('laws')
export class LawsController {
  constructor(private readonly lawsService: LawsService) {}

  @Post('create')
  create(@Body() createLawDto: CreateLawDto) {
    try {
      this.lawsService.create(createLawDto);
      return { data: createLawDto, message: 'Law created succesfully' };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('getAll')
  findAll() {
    try {
      return this.lawsService.findAll();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      return await this.lawsService.findOne(+id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('findBy/:category_id')
  async findBy(@Param('category_id') category_id: number) {
    try {
      const lawByCaegoriId = await this.lawsService.findBy(+category_id);
      return { data: lawByCaegoriId };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Patch('update/:id')
  update(@Param('id') id: number, @Body() updateLawDto: UpdateLawDto) {
    try {
      this.lawsService.update(+id, updateLawDto);
      return { data: updateLawDto, message: 'Law updated successfully' };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete('delete/:id')
  remove(@Param('id') id: number) {
    try {
      return this.lawsService.remove(+id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
