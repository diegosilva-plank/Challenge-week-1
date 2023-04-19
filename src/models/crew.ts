import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Launch } from "./launch";

@Entity()
export class Crew {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  launchId: number;

  @OneToMany(() => Launch, (launch) => launch.rocket)
  launches: Launch[];
}

