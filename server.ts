import express from 'express'
import { router } from './src/routes'
import { errors } from 'celebrate'

const app = express()
const PORT = 3333

app.use(express.json())
app.use(router)
app.use(errors());


app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))