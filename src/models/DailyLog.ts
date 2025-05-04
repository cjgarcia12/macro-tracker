import mongoose from "mongoose"
import { MealType } from "./Meal"

export type DailyLogType = {
    _id?: string
    userId: string
    date: Date
    totalCalories: number
    totalProteins: number
    totalCarbs: number
    totalFats: number
    meals: MealType[]
    createdAt?: Date
    updatedAt?: Date
}

const dailyLogSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    totalCalories: {
        type: Number,
        required: true,
    },
    totalProteins: {
        type: Number,
        required: true,
    },
    totalCarbs: {
        type: Number,
        required: true,
    },
    totalFats: {
        type: Number,
        required: true,
    },
    meals: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Meal",
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
})

const DailyLog = mongoose.model<DailyLogType>('DailyLog', dailyLogSchema);

export default DailyLog
