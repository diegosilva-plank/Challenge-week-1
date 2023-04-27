import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DB_URL ?? "postgres://postgres@localhost:5432/rocket-launch",
  entities: ["./src/models/*{.ts,.js}"],
  migrations: ["./src/database/migrations/*{.ts,.js}"],
});
