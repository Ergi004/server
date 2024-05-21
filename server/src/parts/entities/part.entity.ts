import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Part' })
export  class Part {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  part_id: number;

  @Column()
  part_number: string;

  @Column()
  part_title: string;
  lawCategories: any;
}
