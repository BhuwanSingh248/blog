import mongoose, {Schema, Document} from "mongoose";

interface IComment extends Document {
    text:string;
    user:string;
}

const commentSchema = new Schema({
    text:String,
    user:String,
});

const blogSchema = new Schema({
    title:String,
    content:String,
    author: String,
    likes:{
        type:Number,
        defalut:0,
    },
    comments:[commentSchema],
});

export default mongoose.model('Blog', blogSchema);