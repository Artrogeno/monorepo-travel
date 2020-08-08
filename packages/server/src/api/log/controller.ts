import { Request as Req, Response as Res, NextFunction as Next } from 'express'

import LogEntry from '../../shared/models/logEntry'

export const index = async (req: Req, res: Res, next: Next): Promise<any> => {
  try {
    const entries = await LogEntry.find().select('-__v')
    return res.json(entries)
  } catch (error) {
    next(error)
  }
}
export const show = async (req: Req, res: Res, next: Next): Promise<any> => {
  try {
    const { id: _id } = req.params
    const entry = await LogEntry.findOne({ _id }).select('-__v').exec()
    return res.json(entry)
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

export const update = async (req: Req, res: Res, next: Next): Promise<any> => {
  try {
    const {
      params: { id },
      body,
    } = req
    const logEntry = await LogEntry.updateOne({ _id: id }, body)
    return res.json(logEntry)
  } catch (error) {
    next(error)
  }
}

export const destroy = async (req: Req, res: Res, next: Next): Promise<any> => {
  try {
    const { id: _id } = req.params
    const logEntry = await LogEntry.deleteOne({ _id })
    return res.json(logEntry)
  } catch (error) {
    next(error)
  }
}
