import connectDB from '../../middleware/mongodb';
import Post from '../../models/post';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    // Check if title and imgUrl is provided
    const { title, desc, imgUrl } = req.body;
    if (title && imgUrl) {
        try {
          var newPost = new Post({
            title,
            desc,
            imgUrl,
          });
          // Create and save new post
          var postcreated = await newPost.save();
          return res.status(200).send(postcreated);
        } catch (error) {
          return res.status(500).send(error.message);
        }
      } else {
        res.status(422).send('data_incomplete');
      }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);