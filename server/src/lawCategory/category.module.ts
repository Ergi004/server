import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LawCategory } from './entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LawCategory])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class LawCategoryModule {}
