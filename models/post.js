import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var post = new Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: false
  },
  imgUrl: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.models = {};

var Post = mongoose.model('Post', post);

export default Post;