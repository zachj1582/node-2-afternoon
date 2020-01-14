const express = require('express')
const mc = require('./controllers/messages_controller.js')

const app = express()
app.use(express.json())

app.get('/api/messages', mc.readMessages)
app.post('/api/messages', mc.createMessages)
app.put('/api/messages/:id', mc.updateMessages)
app.delete('/api/messages/:id', mc.deleteMessages)

const port = 3001
app.listen(port, () => console.log(`Server running on port: ${port}`))
