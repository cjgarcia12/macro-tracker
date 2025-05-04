import mongoose, { ObjectId } from "mongoose";
import { FoodType } from "./Food";

export type MealType = {
    _id?: ObjectId
    logId: ObjectId
    name: string
    foods: FoodType[]
    mealCalories: number
    mealProteins: number
    mealCarbs: number
    mealFats: number
}

const mealSchema = new mongoose.Schema({
    logId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DailyLog",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    foods: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Food",
        required: true,
    },
    mealCalories: {
        type: Number,
        required: true,
    },
    mealProteins: {
        type: Number,
        required: true,
    },
    mealCarbs: {
        type: Number,
        required: true,
    },
    mealFats: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false
})

export const Meal = mongoose.model<MealType>('Meal', mealSchema);