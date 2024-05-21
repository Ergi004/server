import { IsNumber, IsString } from 'class-validator';

export class CreateLawDto {
  @IsNumber()
  law_id: number;
  @IsString()
  law_name: string;
  @IsString()
  law_description: string;

  written_date: string;
  @IsNumber()
  category_id: number;
}
