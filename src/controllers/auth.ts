/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Request, Response } from 'express'
import { StatusCodes } from '../types/status-codes'

interface ILoginBody {
  email: string
}

export const login = (req: Request<{}, {}, ILoginBody>, res: Response) => {
  if (!req.body.email) return res.status(StatusCodes.BAD_REQUEST).send('Email is required')

  res.status(StatusCodes.OK).send('Login')
}
