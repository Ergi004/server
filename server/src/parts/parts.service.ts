import { Injectable } from '@nestjs/common';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';
import { Repository } from 'typeorm';
import { Part } from './entities/part.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PartsService {
  constructor(
    @InjectRepository(Part)
    private partsRepository: Repository<Part>,
  ) {}
  async create(createPartDto: CreatePartDto) {
    const partAdded = this.partsRepository.create(createPartDto);
    return await this.partsRepository.save(partAdded);
  }

  async findAll() {
    return this.partsRepository.find();
  }

  findOne(part_id: number): Promise<Part | null> {
    return this.partsRepository.findOneBy({ part_id });
  }

  update(part_id: number, updatePartDto: UpdatePartDto) {
    return this.partsRepository.update(part_id, updatePartDto);
  }

  async remove(part_id: number): Promise<void> {
    await this.partsRepository.delete(part_id);
  }
}
