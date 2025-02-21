const mongoose = require("mongoose");
const { Schema } = mongoose;
const Status = require('../../enums/Status');

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: [Status.ACTIVE, Status.INACTIVE],
    default: Status.ACTIVE,
  },
  parent_id: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    default: null,
  },
}, { timestamps: true });

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;