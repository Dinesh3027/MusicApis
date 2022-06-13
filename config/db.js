const { Pool } = require('pg');
const env = require('./environment');
const pool = new Pool(env.CONFIG);

module.exports = {
    query (text, params, callback){
        this.getClient((err, client, done) => {
            if(err){
                callback({status: 1, error: err});
            } else {
                const start = Date.now();
                const duration = Date.now() - start;
                const res = client.query(text, params).then((result, error) => {
                    if(err){
                        callback({status: 1, error: err});
                    } else {
                        callback({status: 0, result: result});                    
                    }
                });
                console.log('executed query', {
                    text,
                    duration,
                    rows: res.rowCount
                });
            }
            done();
        })
    },
    getClient(callback) {
        pool.connect((err, client, done) => {
            callback(err, client, done);
        })
    }
}