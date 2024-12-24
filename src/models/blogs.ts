import mongoose,{Schema,Document} from "mongoose";

export interface Blogs extends Document{
    title:{
        type:string;
        required:boolean;
        unique:true;
    }
    content:{
        type:string;
        required:boolean;
    }
    images:{
        type:string[];
    }
    createdBy:{
        type:Schema.Types.ObjectId;
        ref:'users';
    }
    createdAt:{
        type:Date;
        default:Date;
    }
    updatedAt:{
        type:Date;
        default:Date;
    }
    comments:{
        type:Schema.Types.ObjectId;
        ref:'comments';
    }
    upvotes:{
        type:Schema.Types.ObjectId[];
        ref:'users';  
    }
    downvotes:{
        type:Schema.Types.ObjectId[];
        ref:'users';  
    }
}

const BlogSchema:Schema<Blogs> = new Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    content:{
        type:String,
        required:true
    },
    images:{
        type:[String]
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    },
    comments:{
        type:Schema.Types.ObjectId,
        ref:'comments'
    },
    upvotes:{
        type:[Schema.Types.ObjectId],
        ref:'users'
    },
    downvotes:{
        type:[Schema.Types.ObjectId],
        ref:'users'
    }
})

const BlogModal =( mongoose.models.Blogs as mongoose.Model<Blogs>)  ||( mongoose.model<Blogs>('Blogs',BlogSchema));

export default BlogModal;