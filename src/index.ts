import express from 'express';
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const usersRouter = require('./users/users.routes');
const authRouter = require('./auth/auth.routes');
const postsRouter = require('./posts/posts.routes');
const commentsRouter = require('./comments/comments.routes');
const chatsRouter = require('./chats/chats.routes');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());

app.use('/api', usersRouter);
app.use('/api', authRouter);
app.use('/api', postsRouter);
app.use('/api', commentsRouter);
app.use('/api', chatsRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
