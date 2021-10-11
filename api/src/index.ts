import express, { request, Request, Response} from 'express'
import auth from './routes/authentication'
import cors from 'cors'

const app = express()

app.use(cors({
  origin: "*",
}))

app.use('/api', auth)

app.listen(8080, () => console.log("server started on 8080"))