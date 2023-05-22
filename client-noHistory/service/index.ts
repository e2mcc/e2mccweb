import express from 'express'
import { chatReply } from './chatgpt'

const app = express()

app.use(express.json())

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  next()
})

app.listen(3000, () => globalThis.console.log('Server is running on port 3000'))

app.post('/chat', async (req, res) => {
  const { message } = req.body
  const response = await chatReply(message)
  res.send(response)
})
