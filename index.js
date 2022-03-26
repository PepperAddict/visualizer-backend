const express = require('express');
const router = express.Router();
const app = express()
const port = process.env.PORT || 8080
const http = require("http").createServer(app);

router.get('/', (req, res) => {
  res.send('Hello, this is a back-end for item visualizer')
})

const play = require('./middleware/playwrite.js')
router.use(play)

app.use('/', router)
http.listen(port, () => {
    console.log("the server is listening in "+ port);
  });