import mongoose from "mongoose";

// model typing
export type UserType = {
    _id?: string
    username: string
    email: string
    passwordHash: string
    age: number
    weight: number
    height: number
    gender: string
    activityLevel: string
    goal: string
    createdAt?: Date
    lastActivity?: Date
}

// model schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: false,
    },
    weight: {
        type: Number,
        required: false,
    },
    height: {
        type: Number,
        required: false,
    },
    gender: {
        type: String,
        required: false,
    },  
    activityLevel: {
        type: String,
        required: false,
    },
    goal: {
        type: String,
        required: false,
    },
    lastActivity: {
        type: Date,
    },
}, {
     timestamps: true,
     versionKey: false,
});

const User = mongoose.model<UserType>("User", userSchema);

export default User;