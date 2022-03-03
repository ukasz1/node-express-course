const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
require('dotenv').config();

const connectDB = require('./db/connect');

// middleware
app.use(express.json())

// routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App');
})

app.get('/test/:id', (req, res) => {
  console.log(req.params)
  res.send('OKej');
})


app.use('/api/v1/tasks', tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server listening on port ${port}...`);
    })

  } catch (error) {
    console.log(error)
  }
}

start();