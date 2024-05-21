import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'LawCategory'})
export class LawCategory {
  @PrimaryGeneratedColumn()
  category_id: number;
  @Column()
  category_title: string;
  @Column()
  category_number: string;
  @Column()
  part_id: number;
}
