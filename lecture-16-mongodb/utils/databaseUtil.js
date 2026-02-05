// todo : Here We have connected with mysql
// const mysql = require('mysql2')

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'Lucee@1',
//   database: 'airbnb',
// })

// module.exports = pool.promise();


// todo : Now In THis lecture we will be using mongodb
const mongo = require('mongodb')

const MongoClient = mongo.MongoClient;

const MONGO_URL = 'mongodb+srv://root:root@completecoding.ldpm0nj.mongodb.net/airbnb?appName=completecoding'

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
  .then(client=>{
    // callback(client)
    callback();
    _db = client.db('airbnb')
  })
  .catch(err=>{
    console.log('Failed to Connect to mongoDB ', err)
  })
}

const getDB = () => {
  if(!_db){
    throw new Error('Mongo not Connected')
  }
  return _db
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
