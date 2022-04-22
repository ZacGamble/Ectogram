import { Schema } from 'mongoose'

export const CommentSchema = new Schema({
  creatorName: { type: String, required: true },
  body: { type: String, required: true },
  creatorId: { type: String, required: true },
  postId: { type: Schema.Types.ObjectId }
},
{ timestamps: true, toJSON: { virtuals: true } }
)
