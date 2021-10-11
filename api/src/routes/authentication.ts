import express from 'express'
const router = express.Router()
import { authentication } from '../controller'
import bodyParser from 'body-parser'

router.use(bodyParser())
console.log(__dirname)

router.post('/login',   authentication.login)
router.get('/gettime',  authentication.getTime)
router.get('/cwd',  authentication.cwd)

export default router;