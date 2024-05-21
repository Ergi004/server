import { PartialType } from '@nestjs/mapped-types';
import { CreateLawCategoryDto } from './create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateLawCategoryDto) {}
