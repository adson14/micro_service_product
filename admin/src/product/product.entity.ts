import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Product{

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  image: string

  @Column({default: 0})
  likes: number
  
}