import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import User from "./User.js";


const Post = sequelize.define('Post', {
    userId:{type:DataTypes.INTEGER, references:{model: User, key: 'id'}},
    content:{type:DataTypes.TEXT, allowNull:false}

});

export default Post