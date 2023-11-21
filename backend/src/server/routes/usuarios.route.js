import express from 'express'
import * as usuarios from '../controllers/usuarios.controller.js'
import { authToken } from '../middlewares/cursos.middleware.js'

const router = express.Router()

router.post('/login', usuarios.login)
router.get('/usuarios', authToken, usuarios.findUserByEmail)
router.post('/usuarios', usuarios.register)

export default router
