import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";

@Entity()
export class CrewMan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  patent: string;

  @ManyToMany(() => CrewMan, (crewMan) => crewMan.crews)
  crews: CrewMan[];
}
