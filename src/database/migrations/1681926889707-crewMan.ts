import { MigrationInterface, QueryRunner } from "typeorm";

export class CrewMan1681926889707 implements MigrationInterface {
    name = 'CrewMan1681926889707'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "crew_man" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "patent" character varying NOT NULL, CONSTRAINT "PK_0eface308960a89dc35795d511e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "crew_man"`);
    }

}
