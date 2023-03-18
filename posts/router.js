const router = express.Router();

router.get('/posts', (req, res) => {
    res.send(posts);
})
.post('/posts', (req, res) => {
    res.send(posts);
});

