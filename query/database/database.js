const { Database } = require('fakebase');
const db = new Database('./database/data/');
const PostComment = db.table('post-comment');

module.exports = {
    PostComment
}