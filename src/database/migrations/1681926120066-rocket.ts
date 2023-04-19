import { MigrationInterface, QueryRunner } from "typeorm";

export class Rocket1681926120066 implements MigrationInterface {
    name = 'Rocket1681926120066'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "rocket" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_89b0efae402998623e1367aa34a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "rocket"`);
    }
}
