import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); 

console.log("DATABASE_URL:", process.env.DATABASE_URL); 

const sequelize = new Sequelize(process.env.DATABASE_URL || "sqlite:./data/database.sqlite", {
    dialect: "sqlite",
    logging: false,
  });
  

export default sequelize;
