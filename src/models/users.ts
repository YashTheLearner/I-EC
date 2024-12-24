import mongoose,{Schema,Document} from "mongoose";

type itemsArray = {
    item:Schema.Types.ObjectId;
    ref:'items';
    borrowedAt:Date;
    returnedAt:Date|null;
}

export interface Users extends Document{
    username:{
        type:string;
        required:boolean;
    }
    email:{
        type:string;
        required:boolean;
        unique:true;
    };
    password:{
        type:string;
        required:boolean;
    };
    role:{
        type: string;
        enum:['admin','member','user'];
        default:'user';
    };
    isVerified:{
        type:boolean;
        default:false;
    }
    Avatar:{
        type:string;
        default:string;
    }
    borrowedItems:{
        type:itemsArray[];
    }
}

const UserSchema = new Schema<Users>({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['admin','member','user'],
        default:'user'
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    Avatar:{
        type:String,
        default:''
    },
    borrowedItems:[{
        item:{
            type:Schema.Types.ObjectId,
            ref:'items'
        },
        borrowedAt:{
            type:Date,
            default:Date.now
        },
        returnedAt:{
            type:Date,
            default:null
        }
    }]

})

const UserModel = (mongoose.models.Users as mongoose.Model<Users>)||(mongoose.model<Users>('Users',UserSchema));

export default UserModel;