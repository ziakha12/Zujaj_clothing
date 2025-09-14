import mongoose,{Schema, Document} from "mongoose";


interface userInterface extends Document{
    username : string,
    email : string,
    password : string
}


const userSchema = new Schema<userInterface>({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email  : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        minLength : [6, 'must be 6 letters']
    }
},{timestamps : true})



const User = mongoose.models.Users || mongoose.model<userInterface>('User', userSchema)

export default User