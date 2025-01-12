import { Router } from 'express'
import { StatusCodes } from '../types/status-codes'

const router = Router()

router.get('/', (req, res) => {
  res.status(StatusCodes.OK).send('Hello World')
})

export { router }
