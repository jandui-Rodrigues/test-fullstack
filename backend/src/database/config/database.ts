import { Options } from "sequelize";

const config: Options = {
  dialect: "mysql",
  password: process.env.DB_PASS || "senhaSegura",
  username: process.env.DB_USER || "root",
  database: process.env.DB_NAME || "DigitalWallet",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  dialectOptions: {
    timezone: "Z",
  },
  logging: false,
};

export = config;
