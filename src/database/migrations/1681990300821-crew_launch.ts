import { MigrationInterface, QueryRunner } from "typeorm";

export class CrewLaunch1681990300821 implements MigrationInterface {
    name = 'CrewLaunch1681990300821'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "launch" ADD "crewId" integer`);
        await queryRunner.query(`ALTER TABLE "launch" ADD CONSTRAINT "FK_0f1c4f512003ae87bb8df983d49" FOREIGN KEY ("crewId") REFERENCES "crew"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "launch" DROP CONSTRAINT "FK_0f1c4f512003ae87bb8df983d49"`);
        await queryRunner.query(`ALTER TABLE "launch" DROP COLUMN "crewId"`);
    }

}
