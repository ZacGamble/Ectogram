import mongoose from 'mongoose'
const Schema = mongoose.Schema
export const PostSchema = new Schema(
  {
    creatorName: { type: String, required: true },
    image: { type: String },
    body: { type: String, required: true },
    // creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },TODO
    score: { type: Number },
    datePosted: { type: Date },
    title: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

PostSchema.virtual('creator', { // change virtual tags? REVIEW
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})
