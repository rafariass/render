import express from 'express'
import * as errors from '../controllers/errors.controller.js'

const router = express.Router()

router.all('*', errors.notFound)

export default router
