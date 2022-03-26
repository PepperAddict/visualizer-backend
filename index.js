const express = require('express');
const router = express.Router();
const app = express()
const port = process.env.PORT || 8080
const http = require("http").createServer(app);
const cors = require("cors");

router.get('/', cors({credentials: true, origin: true}), (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    res.setHeader("Access-Control-Allow-Headers", "Origin,Cache-Control,Accept,X-Access-Token ,X-Requested-With, Content-Type, Access-Control-Request-Method");
  
    res.send('Hello, this is a back-end for item visualizer')
})
router.use(cors());
const play = require('./middleware/playwrite.js')
router.use(play, cors({credentials: true, origin: true}))

const mupload = require('./middleware/monday.js')
router.use(mupload, cors({credentials: true, origin: true}))

app.use('/', router)
http.listen(port, () => {
    console.log("the server is listening in "+ port);
  });