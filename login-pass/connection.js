const mongoose = require("mongoose")

async function connectMongoDb(url) {
   return mongoose.connect(url).then(() => console.log("mongoDB cannect login pass")).catch((err) => console.log("mongo Error", err))
}

module.exports = {
    connectMongoDb
}