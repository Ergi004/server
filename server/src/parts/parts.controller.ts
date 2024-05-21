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
import { PartsService } from './parts.service';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';

@Controller('parts')
export class PartsController {
  constructor(private readonly partsService: PartsService) {}

  @Post('create')
  create(@Body() createPartDto: CreatePartDto) {
    try {
      this.partsService.create(createPartDto);
      return { data: createPartDto, message: 'Part created successfully' };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('getAll')
  async findAll() {
    try {
      const parts = await this.partsService.findAll();
      return { data: parts };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    try {
      return this.partsService.findOne(+id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Patch('update/:id')
  update(@Param('id') id: number, @Body() updatePartDto: UpdatePartDto) {
    try {
      const updatedPart = this.partsService.update(+id, updatePartDto);
      return { data: updatedPart, message: 'Part updated successfully' };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('delete/:id')
  remove(@Param('id') id: number) {
    try {
      return this.partsService.remove(+id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
