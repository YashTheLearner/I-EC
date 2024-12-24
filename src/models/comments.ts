import mongoose, { Schema, Document } from "mongoose";

export interface Comments extends Document {
    content: string;
    commentedAt: mongoose.Types.ObjectId;
    likes: mongoose.Types.ObjectId[];
    dislikes: mongoose.Types.ObjectId[];
    createdBy: mongoose.Types.ObjectId;
    onModel: string;
    createdAt: Date;
    updatedAt: Date;
}

const CommentsSchema:Schema<Comments> = new Schema({
    content: {
        type: String,
        required: true
    },
    commentedAt: {
        type: Schema.Types.ObjectId,
        refPath: 'onModel'
    },
    likes: {
        type: [Schema.Types.ObjectId],
        ref: 'users'
    },
    dislikes: {
        type: [Schema.Types.ObjectId],
        ref: 'users'
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    onModel: {
        type: String,
        required: true,
        enum: ['blogs', 'comments']
    }
});

const CommentsModal =( mongoose.models.Comments as mongoose.Model<Comments>)  ||( mongoose.model<Comments>('Comments',CommentsSchema));

export default CommentsModal;