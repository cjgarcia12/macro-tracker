import Express from 'express'
import Yup from 'yup'

export const validateBody = (
    validation: Yup.AnyObjectSchema
): Express.Handler =>
    async (
        req: Express.Request,
        res: Express.Response,
        next: Express.NextFunction
    ): Promise<void> => {
        try {
            req.body = await validation.validate(req.body, { stripUnknown: true })
            next()
        } catch (err) {
            const error = err as Yup.ValidationError
            res.status(400).json({
                error: error.errors ? error.errors[0] : error.message
            }).end()
        }
    }