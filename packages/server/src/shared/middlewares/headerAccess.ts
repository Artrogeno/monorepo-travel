import { Request, Response, NextFunction } from 'express'

const headerAccess = (req: Request, res: Response, next: NextFunction) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header(
		'Access-Control-Allow-Headers',
		'X-Requested-With, Content-Type, Authorization',
	)
	res.header(
		'Access-Control-Allow-Methods',
		'GET,PUT,PATCH,POST,DELETE,OPTIONS',
	)
	next()
}

export { headerAccess }
