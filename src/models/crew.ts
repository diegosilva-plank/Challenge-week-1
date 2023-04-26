import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  OneToMany,
  ManyToMany,
} from "typeorm";
import { Launch } from "./launch";
import { CrewMan } from "./crewMan";

@Entity()
export class Crew {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Launch, (launch) => launch.rocket)
  launches: Launch[];

  @ManyToMany(() => CrewMan, (crewMan) => crewMan.crews)
  @JoinTable()
  crewMans: CrewMan[];
}
