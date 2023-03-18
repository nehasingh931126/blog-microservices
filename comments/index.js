const express = require('express');
const bodyParser = require('body-parser');
const { Comments } = require('./database/database');
const { randomBytes } = require("crypto")
const app = express();
const router = express.Router()
const cors = require('cors');



app.use(cors());
app.use(router);
app.use(bodyParser.json());

router.get('/posts/:id/comments', async (req, res) => {
    const id = req.params.id; // Id here is the Post Id
    const commentsList = await Comments.findOne((commentObject) => commentObject.id == id);
    res.send(commentsList);
});

router.post('/posts/:id/comments', async (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const {content} = req.body;
    const id = req.params.id;
    const contentObject = { content, id: commentId };
    const commentExists = await Comments.findOne((commentObject)=>commentObject.id == id);
    let comments;
    if (commentExists) {
        comments = [...commentExists.comments, contentObject];
        const updateComment = await Comments.update({ id: commentExists.id, comments });
        res.status(200).send(updateComment);
    } else {
        comments = [contentObject];
        const createComment = await Comments.create({ id, comments}); 
        res.status(201).send(createComment);
    }
});

app.listen(4001, () => {
    console.log('Listening on 4001');
})
