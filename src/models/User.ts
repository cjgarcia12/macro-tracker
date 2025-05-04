import mongoose from "mongoose";

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
    passwordHash: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },  
    activityLevel: {
        type: String,
        required: true,
    },
    goal: {
        type: String,
        required: true,
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