const express = require('express');
const bodyParser = require('body-parser');
const {Posts} = require('./database/database');
const { randomBytes } = require("crypto")
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const router = express.Router()

app.use(router);

router.get('/posts', async (req, res) => {
    const postList = await Posts.findAll();
    res.send(postList);
});

router.post('/posts', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const response = await Posts.create({ ...req.body, id });
    console.log(response);
    res.status(201).send(response);
});

app.listen(4000, ()=> {
    console.log('Listening on 4000');
})
