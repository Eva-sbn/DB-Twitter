const mongoose = require("mongoose");

const savedSchema = mongoose.Schema({
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }

});
const Saved = mongoose.model("Saved", savedSchema);

module.exports = Saved;