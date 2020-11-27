const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        require: true  
    },
    content: {
        type: String,
        require: true  
    },
    description: {
        type: String,  
    },
    category: {
        type: String,
        require: true  
    }
});

module.exports = mongoose.model('Article', PostSchema)
