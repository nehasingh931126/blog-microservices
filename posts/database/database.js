const { Database, Entity } = require('fakebase');
const db = new Database('./database/data/');
const Posts = db.table('posts');

module.exports= {
    Posts
}