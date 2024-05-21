import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity({name: 'Law'})
export class Law {
  @PrimaryGeneratedColumn()
  law_id: number
  @Column()
  law_name: string
  @Column({ type: 'text' })
  law_description: string
  @Column()
  written_date: string
  @Column()
  category_id: number
}
