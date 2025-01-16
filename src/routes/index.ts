import { Router } from 'express'
import { StatusCodes } from '../types/status-codes'

import { controllers } from '../controllers'

const router = Router()

router.get('/', (req, res) => {
  res.status(StatusCodes.OK).send('Hello World')
})

router.post('/login', controllers.login)

export { router }
