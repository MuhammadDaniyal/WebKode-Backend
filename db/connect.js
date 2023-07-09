const mongoose = require('mongoose');

async function connect() {
    mongoose.set('strictQuery', true)
    const db = await mongoose.connect('mongodb+srv://daniyalshiekh166:webkode@cluster0.yh3utm8.mongodb.net/?retryWrites=true&w=majority', {
        dbName: "WebKode"
    })
    console.log("Database Connected");
    return db
}

module.exports = connect