import express from 'express'

const server = express()
const port = 4000

server.listen(port, () =>
  console.log(
    `Server is running in process ${process.pid} listening on PORT ${port}\n`,
  ),
)
