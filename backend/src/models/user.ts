import mongoose from "mongoose";
import validator from "validator";

interface IUser  extends Document {
    _id: string,
    name: string;
    email: string;
    photo: string,
    role: "admin" | "user",
    dob: Date,
    gender: "male" | "female" | "other",
    age: Number,
    createdAt: Date,
    updatedAt: Date,
}

const schema = new mongoose.Schema({
    _id:{
        type: String,
        required:[true,"Please provide an ID"]
    },
    name:{
        type: String,
        minLength: 3,
        maxLength: 100,
        required: [true,"Please enter name"]
    },
    email:{
        type: String,
        unique: [true,"This email is already exists"],
        required: [true,"Please enter email"],
        validate: validator.default.isEmail
    },
    photo:{
        type: String,
        required: [true,"Please add photo"]
    },
    role:{
        type: String,
        enum: ["admin","user"],
        default: "user"
    },
    dob:{
        type: Date,
        required: [true,"Please enter date of birth"]
    },
    gender:{
        type: String,
        enum:["male", "female", "other"],
        required: [true,"Please enter gender"]
    },
},{timestamps:true});

schema.virtual('age').get(function () {
    const today = new Date();
    const dob = this.dob;
    let age = today.getFullYear() - dob.getFullYear();

    if (
        today.getMonth() < dob.getMonth() ||
        (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
    ) {
        age--;
    }
    return age;
});


export const User = mongoose.model<IUser>("User", schema);