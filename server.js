
const express = require('express');
const path = require('path');
const Blog = require('./models/blog');


const app = express();

const PORT = process.env.PORT || 80;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'pages'))
app.use('/assets', express.static('assets'));




app.get('/', (req, res) => {
    const authorName = 'ORxan Racabov';
    res.render('index', {
        authorName: authorName,
    });
});

app.get('/blog', (req, res) => {
    const blogs = Blog.getAll();
    res.render('blog', { blogs });
});

app.get('/post', (req, res) => {

    res.render('post');

});

app.get('/contact', (req, res) => {
    res.render('contact');

});




app.listen(PORT, () => {
    console.log(`Express server is running on ${PORT}`);
});




