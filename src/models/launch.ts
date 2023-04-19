import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Rocket } from "./rocket";

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

  @Column()
  rocketId: number;

  @ManyToOne(() => Rocket, (rocket) => rocket.launches)
  rocket: Rocket;
}
