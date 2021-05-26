import connectDB from '../../middleware/mongodb';
import Post from '../../models/post';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    // Get all posts
    try {
      let posts = await Post.find();
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else {
    res.status(422).send('data_incomplete');
    return res.end();
  }
};

export default connectDB(handler);

//Old way

    // Post.find()
    //     .exec( (err, posts) => {
    //       if (err)
    //         res.status(500).send('Error loading data');
    //       else
    //         res.status(200).json(posts);

    //       return res.end();
    //     });