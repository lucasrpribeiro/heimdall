import { Request, Response } from 'express'
import { StatusCodes } from '../types/status-codes'

export const login = (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('Login')
}
