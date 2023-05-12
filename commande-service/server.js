const express = require("express")
const app = express()
const PORT = 5000
const mongoose = require('mongoose') 
app.use(express.json())




app.get('/',(req, res) => {
    res.send("Test")
})


app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
})


async function connectDB() {
    try {
        const connect = await mongoose.connect('mongodb://127.0.0.1:27017/microservice2')
        console.log(`MongoDB Connected:${connect.connection.host}`);
    } catch (error) {
        console.log("Can't connect to MongoDB !");
        process.exit(1)
    }
}

connectDB()
