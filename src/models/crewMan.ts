import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { Crew } from "./crew";

@Entity()
export class CrewMan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  patent: string;

  @ManyToMany(() => Crew, (crew) => crew.crewMans)
  crews: Crew[];
}
