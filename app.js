const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dayjs = require('dayjs');

const indexRouter = require('./routers/index');

dotenv.config();
const app = express();

app.use(morgan('tiny'));

mongoose.connect(`${process.env.DB_URL}${process.env.DB_DB}`);

mongoose.connection.on('connected', () => {
    console.log('MongoDB Connected');
});

mongoose.connection.on('disconnected', () => {
    console.error('MongoDB disConnected');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.locals.formatDate = (date) => {
    return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
};

app.use('/', indexRouter);

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status = err.status ?? 500;
    res.locals.error.status = res.status;
    res.render('error');
});

app.listen(5500, () => {
    console.log(`server connected`);
});
