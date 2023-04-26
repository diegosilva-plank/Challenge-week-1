import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Launch } from "./launch";

@Entity()
export class Rocket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Launch, (launch) => launch.rocket)
  launches: Launch[];
}
