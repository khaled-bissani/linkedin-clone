const express = require('express');

require('dotenv').config();
require('./config/database.config');
const app = express();
app.use(express.json());

const authRouter = require('./routes/auth.routes');
app.use('/auth', authRouter);

const profileRouter = require('./routes/profile.routes');
app.use('/profile',profileRouter);

const searchRouter = require('./routes/search.routes');
app.use('/search', searchRouter);

const followRouter = require('./routes/follow.routes');
app.use('/follow', followRouter);

app.listen(process.env.PORT, (err)=>{
    if(err) console.log(err);
    console.log(`Running server on port ${process.env.PORT}`);
})