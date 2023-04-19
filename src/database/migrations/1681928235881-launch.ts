import { MigrationInterface, QueryRunner } from "typeorm";

export class Launch1681928235881 implements MigrationInterface {
    name = 'Launch1681928235881'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "launch" ("id" SERIAL NOT NULL, "launchCode" character varying NOT NULL, "date" character varying NOT NULL, "success" boolean NOT NULL, "rocketId" integer NOT NULL, CONSTRAINT "PK_0efd83695074312cab129ff59f0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "launch" ADD CONSTRAINT "FK_b01b01e9029a8e3c1a928511998" FOREIGN KEY ("rocketId") REFERENCES "rocket"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "launch" DROP CONSTRAINT "FK_b01b01e9029a8e3c1a928511998"`);
        await queryRunner.query(`DROP TABLE "launch"`);
    }

}
