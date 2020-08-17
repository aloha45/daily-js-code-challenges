const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// make a schema
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

// make a model based on that schema (first argument variable should be singular of the collection name)
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;