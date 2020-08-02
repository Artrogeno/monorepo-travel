import { Request, Response, NextFunction } from 'express'

import { HttpError } from './httpError'
import MESSAGES from '../constants/httpResponse'

const routerHandler = (req: Request, res: Response, next: NextFunction) => {
	if (!res.headersSent) {
		return next(new HttpError(MESSAGES.ROUTER_NOT_FOUND, 404))
	}
	next()
}

const errorHandler = (
	error: any,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	if (res.headersSent) return next(error)

	let message: any
	if (error.errors && error.errors.length > 0) {
		error.errors.map((err: any) => {
			if (err.messages) err.messages.map((msg: any) => message.push(msg))
		})
	} else {
		if (error.name === 'UnauthorizedError') {
			message = MESSAGES.UNAUTHORIZED_REQUEST
		} else {
			message = error.message || MESSAGES.INVALID_REQUEST
		}
	}
	return res.status(error.statusCode || 401).json({
		message,
		data: error.data || '',
	})
}

export { routerHandler, errorHandler }
