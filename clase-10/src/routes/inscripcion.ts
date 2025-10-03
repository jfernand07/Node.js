import { Router, type Request, type Response } from 'express'
import { createinscripcion, getinscripcion,getinscripcionById, deleteinscripcion, updateinscripcion } from '../controllers/inscripcion.Controller.ts'

const router:Router = Router()


router.get("/inscripcion", getinscripcion)
router.get('/inscripcion/:id', getinscripcionById)
router.post('/inscripcion/', createinscripcion)
router.put('/inscripcion/:id', updateinscripcion)
router.delete('/inscripcion/:id', deleteinscripcion)

export { router }