import { Injectable } from '@nestjs/common';
import { CreateLawDto } from './dto/create-law.dto';
import { UpdateLawDto } from './dto/update-law.dto';
import { Repository } from 'typeorm';
import { Law } from './entities/law.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LawsService {
  constructor(
    @InjectRepository(Law)
    private lawRepository: Repository<Law>,
  ) {}
  create(createLawDto: CreateLawDto) {
    const createdLaw = this.lawRepository.create(createLawDto);
    return this.lawRepository.save(createdLaw);
  }

  findAll() {
    return this.lawRepository.find();
  }

  findOne(law_id: number) {
    return this.lawRepository.findOneBy({ law_id });
  }

  findBy(category_id: number) {
    return this.lawRepository.findBy({ category_id });
  }

  update(law_id: number, updateLawDto: UpdateLawDto) {
    return this.lawRepository.update(law_id, updateLawDto);
  }

  remove(law_id: number) {
    return this.lawRepository.delete({ law_id });
  }
}
