import User from "../models/User";
import Express from "express"

// we can create methods here to export that can be getters and setters and what not

export const createUser = async (req: Express.Request, res: Express.Response) => {
    try {
        const createdUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })

        res.json(createdUser).status(201)
    }
    catch (err) {
        console.error(err, 500)
    }
}

export const getUsers = async (_: Express.Request, res: Express.Response) => {
    try {
        const users = await User.find({}).lean()

        res.json(users).status(200)
    } catch (err) {
        console.error(err, 500)
    }
}