import { Schema } from 'mongoose'

export const CommentSchema = new Schema({
  creatorName: { type: String, required: true },
  body: { type: String, required: true },
  creatorId: { type: String, required: true },
  postId: { type: Schema.Types.ObjectId, required: true }
},
{ timestamps: true, toJSON: { virtuals: true } }
)
CommentSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})
