const MongoDB = require("mongodb").MongoClient;

function connectDB(cb) {
  const url = "mongodb://localhost:27017/";
  MongoDB.connect(url, (err, db) => {
    if (err) {
      console.log(err);
      return;
    }
    cb(db);
  });
}

function clearCollection(collectionName) {
  return new Promise((resolve, reject) => {
    connectDB(db => {
      const dbo = db.db("lol-universe");
      dbo.collection(collectionName).drop((err, dbOk) => {
        if (err) {
          reject(err);
          return;
        }
        db.close();
        resolve(db);
      });
    });
  });
}

function addList(collectionName, list) {
  return new Promise((resolve, reject) => {
    connectDB(db => {
      const dbo = db.db("lol-universe");
      dbo.collection(collectionName).insertMany(list, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
      });
    });
  });
}

module.exports = {
  connectDB,
  addList,
  clearCollection
};
