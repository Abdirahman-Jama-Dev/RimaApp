import { DataTypes } from "sequelize";
import sequelize from "../config/db";
import User from "./User";


const Post = sequelize.define('Post', {
    userId:{type:DataTypes.INTEGER, references:{model: User, key: 'id'}},
    content:{type:DataTypes.TEXT, allowNull:false}

});

export default Post