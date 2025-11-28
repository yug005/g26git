
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
    email: {
    type: String,
    required: true,
    }
});

module.exports= mongoose.model('blog', blogSchema);
 