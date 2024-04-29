import { MigrationInterface, QueryRunner } from "typeorm";

export class Tokens1714014342551 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `--Table Definition
        CREATE TABLE "tokens"  (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "name" character varying NOT NULL,
        "ticker" character varying NOT NULL,
        "description" character varying NOT NULL,
        CONSTRAINT "token_pkey" PRIMARY KEY ("id")
        )`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "tokens"`)
  }
}
