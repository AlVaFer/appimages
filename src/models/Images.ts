import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    resolution: Number,
    md5: String,
    imagePath: String
},{timestamps:true});


export interface IPhoto extends Document {
    resolution: Number,
    md5: String,
    imagePath: String
}

export default model<IPhoto>('Images', schema);