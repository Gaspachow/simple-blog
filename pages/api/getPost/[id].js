import connectDB from '../../../middleware/mongodb';
import Post from '../../../models/post';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    // Get the post using its unique ID
    const { id } = req.query;
    try {
      let post = await Post.findById(id);
      return res.status(200).json(post);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else {
    res.status(422).send('data_incomplete');
    return res.end();
  }
};

export default connectDB(handler);