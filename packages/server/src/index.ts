import express from 'express'
import { env } from '@traveler/environment'

const { NODE_PORT } = env
const server = express()

server.listen(NODE_PORT, () =>
  console.log(
    `Server is running in process ${process.pid} listening on PORT ${NODE_PORT}\n`,
  ),
)
