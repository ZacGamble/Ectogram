import mongoose from 'mongoose'
const Schema = mongoose.Schema
// creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }, REVIEW
export const PostSchema = new Schema(
  {
    creatorName: { type: String, required: true },
    body: { type: String, required: true },
    creatorId: { type: String, required: true },
    score: { type: Number },
    datePosted: { type: Date },
    title: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

// PostSchema.virtual('creator', { // change virtual tags? REVIEW
//   localField: 'creatorId',
//   foreignField: '_id',
//   justOne: true,
//   ref: 'Profile'
// })
