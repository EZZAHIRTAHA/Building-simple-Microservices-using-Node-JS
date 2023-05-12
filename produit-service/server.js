const express = require("express")
const app = express()
const PORT = 5000
const Produit = require('./Produits')
const mongoose = require('mongoose') 
app.use(express.json())




app.get('/api/produits', async (req, res) => {
    const produits = await Produit.find()
    res.status(200).json(produits)
})

app.post('/api/produits/ajouter', async(req, res) => {
    try {
        const {nom, description, prix} = await req.body
        const product = await Produit.create({nom, description, prix});
        res.status(201).json(product);
      } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server error' });
      }
})

app.get('/api/produits/acheter/:id1/:id2', async (req, res) => {
    const { id1, id2 } = req.params
    const produit1 = await Produit.findById(id1)
    const produit2 = await Produit.findById(id2)
    if( !produit1 || !produit2) {
        res.status(500)
        throw new Error("Le produit que vous recherchez n'est pas disponible")
    }
    res.status(200).json({produit1, produit2})
})

app.get('/',(req, res) => {
    res.send("Test")
})


app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
})


async function connectDB() {
    try {
        const connect = await mongoose.connect('mongodb://127.0.0.1:27017/microservice')
        console.log(`MongoDB Connected:${connect.connection.host}`);
    } catch (error) {
        console.log("Can't connect to MongoDB !");
        process.exit(1)
    }
}

connectDB()
