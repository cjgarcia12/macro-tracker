import mongoose, { ObjectId } from "mongoose";

export type FoodType = {
    _id?: ObjectId
    name: string
    brand?: string
    sevingSize: string
    calories: number
    protein: number
    carbs: number
    fats: number
}

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: false
    },
    servingSize: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    protien: {
        type: Number,
        required: true
    },
    carbs: {
        type: Number,
        required: true
    },
    fats: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

export const Food = mongoose.model<FoodType>('Food', foodSchema)