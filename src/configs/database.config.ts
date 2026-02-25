import { Sequelize } from "sequelize";

export const db = new Sequelize("abckamba", "postgres", "2124",{
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    logging: false,
});
