import { Request as Req, Response as Res, NextFunction as Next } from 'express'

import LogEntry from '../../shared/models/logEntry'

export const index = async (req: Req, res: Res, next: Next) => {
  try {
    const entries = await LogEntry.find()
    return res.json(entries)
  } catch (error) {
    next(error)
  }
}

export const store = async (req: Req, res: Res, next: Next): Promise<any> => {
  try {
    const logEntry = await LogEntry.create(req.body)
    return res.json(logEntry)
  } catch (error) {
    next(error)
  }
}
