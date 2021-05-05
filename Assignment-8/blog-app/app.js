const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const indexRoute = require('./routes/index');
const blogRoute = require('./routes/blog');
//const seedDB = require('./seed');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');

// DB Connection
mongoose.connect('mongodb://localhost:27017/blogApp',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(()=> console.log('Connected to DB.'))
.catch((e) => console.log(e.message));

// Middleware Declarations
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

const sessionConfig = {
    secret: 'thisisweiredsecret',
    resave: false,
    saveUninitialized: true
};
app.use(session(sessionConfig));
app.use(flash());
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})
//seedDB();
// API
app.use(indexRoute);
app.use(blogRoute);

app.get('/', (req, res) => {
    res.send('You hit the root path...');
})

const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`Listenin on PORT : ${port}`);
});