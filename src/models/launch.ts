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

  @Column()
  success: boolean;

  @ManyToOne(() => Rocket, (rocket) => rocket.launches, { nullable: false })
  rocket: Rocket;

  @ManyToOne(() => Crew, (crew) => crew.launches)
  crew: Crew;
}
