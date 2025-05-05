import Express from 'express'

export const handleError = (err: unknown, res: Express.Response) => {
    console.error(err)

    return res.status(500)
}