import { Sequelize } from "sequelize";
import { ENV } from "../../env";

export const db = new Sequelize(ENV._RENDER_DATABASE_URI,
    {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
);
