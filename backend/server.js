import express from 'express';
import sequelize from './config/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
import likeRoutes from './routes/likeRoutes.js';
import commentRoutes from './routes/commentRoutes.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Sync all defined models to the DB
sequelize.sync()
    .then(() => console.log("Database & tables created!"))
    .catch(err => console.log("Error: " + err));

// Routes
app.use('/auth',auth)
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/likes', likeRoutes);
app.use('/api/comments', commentRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
