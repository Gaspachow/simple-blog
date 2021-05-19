import connectDB from '../../middleware/mongodb';
import Post from '../../models/post';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    // Check if title, desc or imgUrl is provided
    const { title, desc, imgUrl } = req.body;
    if (title && desc && imgUrl) {
        try {
          var newPost = new Post({
            title,
            desc,
            imgUrl,
          });
          // Create new user
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