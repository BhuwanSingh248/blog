import mongoose, { Schema, Document} from "mongoose";

interface ILike extends Document {
    blog:mongoose.Types.ObjectId;
    user:String;
}

const likeSchema = new Schema({
    blog: {
        type:mongoose.Types.ObjectId,
        ref:'Blog',
    },
    user:String,
});

export default mongoose.model('Like', likeSchema)

