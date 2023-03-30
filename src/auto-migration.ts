import { Sequelize } from "sequelize-typescript";
import { join } from "path";
import { SequelizeTypescriptMigration } from "sequelize-typescript-migration-lts";
import { Dialect } from "sequelize";
import { Contact } from "./app/contact.model";

const bootstrap = async () => {
  const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql' as Dialect,
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'hotel_test',
    logging: console.log,
    define: {
      paranoid: true,
      timestamps: true
    },
    models: [Contact]
  });
  try {
    const result = await SequelizeTypescriptMigration.makeMigration(sequelize, {
      outDir: join(__dirname, "./database/migrations"),
      migrationName: "init database",
      useSnakeCase: false,
    });
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

bootstrap();