import express from 'express'
import cors from 'cors'
import * as routes from './routes/index.js'
import { tracker } from './middlewares/router.middleware.js'

const PORT = process.env.PORT ?? 3000
const app = express()

app.use(cors())
app.use(express.json())

app.use(tracker)

app.use(routes.usuarios)
app.use(routes.errors)

app.listen(PORT, () => console.log(`SERVER UP in PORT: ${PORT}`))

console.log(process.env.RENDER_DISCOVERY_SERVICE)
console.log(process.env.RENDER_EXTERNAL_HOSTNAME)
console.log(process.env.RENDER_EXTERNAL_URL)

export default app
