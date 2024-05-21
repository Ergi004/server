import { Injectable } from '@nestjs/common';
import { CreateLawCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Repository } from 'typeorm';
import { LawCategory } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(LawCategory)
    private lawCategoryRepository: Repository<LawCategory>,
  ) {}
  create(createLawCategoryDto: CreateLawCategoryDto) {
    const createdLawCategory =
      this.lawCategoryRepository.create(createLawCategoryDto);
    return this.lawCategoryRepository.save(createdLawCategory);
  }

  async findAll() {
    console.log(await this.lawCategoryRepository.find());
    return this.lawCategoryRepository.find();
  }

  async findBy(part_id: number) {
    return await this.lawCategoryRepository.findBy({ part_id });
  }

  findOne(category_id: number) {
    return this.lawCategoryRepository.findOneBy({ category_id });
  }

  update(category_id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.lawCategoryRepository.update(category_id, updateCategoryDto);
  }

  remove(category_id: number) {
    return this.lawCategoryRepository.findOneBy({ category_id });
  }
}
