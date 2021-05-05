const express = require('express');
const Blog = require('../models/blog');
const Comment = require('../models/comment');
const router = express.Router();

// Get route
router.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find();
        
        res.render('blogs/index', {blogs});
    } catch (err) {
        console.log(err.message);
        req.flash('error', 'Cannot Find Blogs')
        res.redirect('/error');
    }
})

// Get form to create a blog
router.get('/blogs/new', (req, res) => {
    res.render('blogs/new');
})

// Create a new blog
router.post('/blogs', async (req, res) => {

    try {
        await Blog.create(req.body.blog)
        req.flash('success', 'Blog Created Successfully');
        res.redirect('/blogs');
    } catch (err) {
        console.log(err.message);
        req.flash('error', 'Cannot Create Blog')
        res.redirect('/error');
    }
    
})

// Get a particular blog
router.get('/blogs/:id', async(req, res) => {
    
    try {
        const blog = await Blog.findById(req.params.id).populate('comments');
        res.render('blogs/show', {blog});
    } catch (err) {
        console.log(err.message);
        req.flash('error', '404 Blog Not Found !!!')
        res.redirect('/error');
    }
    
})

// Get form to edit a blog
router.get('/blogs/:id/edit', async (req, res) => {

    try {
        const blog = await Blog.findById(req.params.id);

        res.render('blogs/edit', {blog});
    } catch (err) {
        console.log(err.message);
        req.flash('error', '404 Blog Not Found !!!')
        res.redirect('/error');
    }
    
})
// Edit a blog
router.patch('/blogs/:id', async (req, res) => {
    
    try {
        await Blog.findByIdAndUpdate(req.params.id, req.body.blog);
        req.flash('success', 'Blog Updated Successfully');
        res.redirect(`${req.params.id}`);
    } catch (err) {
        console.log(err.message);
        req.flash('error', '500: Unable To Update Blog !!!')
        res.redirect('/error');
    }
})

router.delete('/blogs/:id', async(req, res) => {

    try {
        await Blog.findByIdAndDelete(req.params.id);
        req.flash('success', 'Blog Deleted Successfully');
        res.redirect('/blogs');
    } catch (err) {
        console.log(err.message);
        req.flash('error', '500: Unable To Delete Blog !!!')
        res.redirect('/error');
    }
    
})


// Comment route
router.post('/blogs/:id/comment', async (req, res) => {

    try {
        const blog = await Blog.findById(req.params.id);
        const comment = new Comment(req.body);

        blog.comments.push(comment);

        await comment.save();
        await blog.save();
    
        req.flash('success', 'Comment Added Successfully');
        res.redirect(`/blogs/${req.params.id}`)
    } catch (err) {
        console.log(err.message);
        req.flash('error', '500: Unable to add comment !!!')
        res.redirect('/error');
    }
    
})

// Error route
router.get('/error', (req, res) => {
    res.render('error');
})
module.exports = router;
