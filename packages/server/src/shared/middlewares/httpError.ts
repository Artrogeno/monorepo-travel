export class HttpError extends Error {
	public data: any
	public statusCode: number

	constructor(message: string, statusCode: number, data?: any) {
		super(message)
		this.statusCode = statusCode
		this.data = data
	}
}
