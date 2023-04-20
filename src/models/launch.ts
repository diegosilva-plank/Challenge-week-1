import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Rocket } from "./rocket";
import { Crew } from "./crew";

@Entity()
export class Launch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  launchCode: string;

  @Column()
  date: string;

  @ManyToOne(() => Rocket, (rocket) => rocket.launches)
  rocket: Rocket;

  @ManyToOne(() => Crew, (crew) => crew.launches)
  crew: Crew;
}
