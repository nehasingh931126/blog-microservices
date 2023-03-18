const {Database, Entity} = require('fakebase');

const db = new Database('./database/data/');
const Comments = db.table('comments');


module.exports = {
    Comments
}

