import {Router} from 'express'
import { createevent, getAllevent, geteventById, updateevent, deleteevent } from '../controllers/evento.controller.ts'

const router:Router = Router()

router.get('/eventos', getAllevent)
router.get('/eventos/:id', geteventById)
router.post('/eventos', createevent)
router.patch('/eventos/:id', updateevent)
router.delete('/eventos/:id', deleteevent)
export { router }