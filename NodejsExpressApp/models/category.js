const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true  
    }
});

module.exports = mongoose.model('Category', PostSchema)