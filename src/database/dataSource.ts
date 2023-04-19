import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "",
  database: "rocket-launch",
  entities: ["./src/models/*{.ts,.js}"],
  migrations: ["./src/database/migrations/*{.ts,.js}"],
});
