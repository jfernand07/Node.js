import { Router} from 'express'
import { createuser, getuser, getusers, updateuser,deleteduser } from '../controllers/user.controller.ts'

const router:Router = Router()

router.get('/users', getusers)
router.get('/users/:id', getuser)
router.post('/users', createuser)
router.patch('/users/:id', updateuser)
router.delete('/users/:id', deleteduser)
export { router }