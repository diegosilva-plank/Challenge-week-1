import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CrewMan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  patent: string;
}
