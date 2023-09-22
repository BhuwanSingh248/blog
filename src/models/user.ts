import mongoose,{Schema, Document} from "mongoose";


export interface IUser extends Document{
    username:string;
    password:string;
    name:string;
    email:string;
}

const userSchema = new Schema({
    username: {type: String, required:true, unique:true},
    password: {type:String, required:true},
    name:{type:String, required:true},
    email:{type:String, required:true}
});

export default mongoose.model<IUser>('User', userSchema);