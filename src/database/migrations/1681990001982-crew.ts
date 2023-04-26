import { MigrationInterface, QueryRunner } from "typeorm";

export class Crew1681990001982 implements MigrationInterface {
    name = 'Crew1681990001982'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "crew" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_cc72b429996b3476dbaac59f1c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "crew_crew_mans_crew_man" ("crewId" integer NOT NULL, "crewManId" integer NOT NULL, CONSTRAINT "PK_0c8592769ed29e3a1ff2cea0766" PRIMARY KEY ("crewId", "crewManId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0522ab65381ffc7ddebddc5900" ON "crew_crew_mans_crew_man" ("crewId") `);
        await queryRunner.query(`CREATE INDEX "IDX_0a18a3a98cd5667e0480aa26e6" ON "crew_crew_mans_crew_man" ("crewManId") `);
        await queryRunner.query(`ALTER TABLE "launch" DROP COLUMN "success"`);
        await queryRunner.query(`ALTER TABLE "launch" DROP CONSTRAINT "FK_b01b01e9029a8e3c1a928511998"`);
        await queryRunner.query(`ALTER TABLE "launch" ALTER COLUMN "rocketId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "launch" ADD CONSTRAINT "FK_b01b01e9029a8e3c1a928511998" FOREIGN KEY ("rocketId") REFERENCES "rocket"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "crew_crew_mans_crew_man" ADD CONSTRAINT "FK_0522ab65381ffc7ddebddc59007" FOREIGN KEY ("crewId") REFERENCES "crew"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "crew_crew_mans_crew_man" ADD CONSTRAINT "FK_0a18a3a98cd5667e0480aa26e68" FOREIGN KEY ("crewManId") REFERENCES "crew_man"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "crew_crew_mans_crew_man" DROP CONSTRAINT "FK_0a18a3a98cd5667e0480aa26e68"`);
        await queryRunner.query(`ALTER TABLE "crew_crew_mans_crew_man" DROP CONSTRAINT "FK_0522ab65381ffc7ddebddc59007"`);
        await queryRunner.query(`ALTER TABLE "launch" DROP CONSTRAINT "FK_b01b01e9029a8e3c1a928511998"`);
        await queryRunner.query(`ALTER TABLE "launch" ALTER COLUMN "rocketId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "launch" ADD CONSTRAINT "FK_b01b01e9029a8e3c1a928511998" FOREIGN KEY ("rocketId") REFERENCES "rocket"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "launch" ADD "success" boolean NOT NULL`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0a18a3a98cd5667e0480aa26e6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0522ab65381ffc7ddebddc5900"`);
        await queryRunner.query(`DROP TABLE "crew_crew_mans_crew_man"`);
        await queryRunner.query(`DROP TABLE "crew"`);
    }

}
