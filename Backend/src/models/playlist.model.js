import mongoose, {Schema} from "mongoose";

const playListSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    desscription:{
        type:String,
        required:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    videos:[
        {
        type:Schema.Types.ObjectId,
        ref:"Video"
       }
    ]

},
{
    timestamps:true
}
)

export const PlayList = mongoose.model("PlayList" , playListSchema)