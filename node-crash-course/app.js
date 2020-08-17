const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { response } = require('express');
const { render } = require('ejs');
const blogRoutes = require('./routes/blogRoutes')

// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://new_user1:byt@!264@nodetuts.ouhnc.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// listen for requests (route handlers)
// app.listen(3000); 

// middleware & static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true })); // for accepting form data (otherwise undefined)
app.use(morgan('dev'));

// middleware and mongo sandbox routes

// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog2',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById('5f39d8746aac5e4fb00b1d1d')
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// });

// routes
app.get('/', (req, res) => {
    res.redirect('/blogs')
});

app.get('/about', (req, res) => {
    //infers header and status code
    // res.send('<p>about page</p>');
    // res.sendFile('./views/about.html', { root: __dirname});
    res.render('about.ejs', { title: 'About'});
    // res.write('');
    // res.end();
});

// blog routes

app.use('/blogs', blogRoutes);

// redirects
    //express infers status code
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// })


// 404s
    // create and fire middleware
    // must manually enter status code

app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname})
    res.status(404).render('404.ejs', { title: '404'})
});