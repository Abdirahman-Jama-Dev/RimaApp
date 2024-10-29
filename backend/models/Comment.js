import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Post from './Post.js';
import User from './User.js';

const Comment = sequelize.define('Comment', {
    postId: { type: DataTypes.INTEGER, references: { model: Post, key: 'id' } },
    userId: { type: DataTypes.INTEGER, references: { model: User, key: 'id' } },
    content: { type: DataTypes.TEXT, allowNull: false },
});

export default Comment;
