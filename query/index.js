const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const { PostComment } = require('./database/database');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/posts', async (req, res) => {
    const postCommentList = await PostComment.findAll();
    res.send(postCommentList);
});

// {
//     postId: "",
//     postTitle: "",
//     comments: []
// }
app.post('/events', async (req, res) => {
    const event = req.body;
    if (event.type === 'PostCreated'){
        const {id, title} = event.data;
        const postComent = await PostComment.create({ id, title, comments: [] });
        res.status(200).send(postComent);
    } else if (event.type === 'CommentCreated') {
        const { id, content, postId } = event.data;
        const postCommentObject = await PostComment.findById(postId);
        
        console.log(postCommentObject.comments);

        postCommentObject.comments.push({id, content});
        await PostComment.update(postCommentObject);
        res.status(201).send(PostComment);
    }
});


app.listen(4002, () => {
    console.log('Listening on 4002');
});