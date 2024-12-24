import mongoose,{Schema,Document} from "mongoose";

export interface Items extends Document{
    itemname:{
        type:string;
        required:boolean;
        unique:true;
    }
    itemDescription:{
        type:string;
        required:boolean;
    }
    quantity:{
        type:number;
        required:boolean;
    }
}

const ItemsSchema:Schema<Items> = new Schema({
    itemname:{
        type:String,
        required:true,
        unique:true
    },
    itemDescription:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
});

const ItemsModal =( mongoose.models.Items as mongoose.Model<Items>)  ||( mongoose.model<Items>('Items',ItemsSchema));

export default ItemsModal;