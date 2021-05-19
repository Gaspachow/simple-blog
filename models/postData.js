let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let PostDataSchema = new Schema(
    {
        title: {type: String, required: true},
        Description: {type: String, required: true},
        imgUrl: {type: String, required: true},
        Date: {type: Date, default: Date.now},
    }
);

// Virtual for book's URL
PostSchema.virtual('url').get(function() {
    return ('/catalog/book/' + this._id);
});

// Export model
module.exports = mongoose.model('PostData', PostDataSchema);
