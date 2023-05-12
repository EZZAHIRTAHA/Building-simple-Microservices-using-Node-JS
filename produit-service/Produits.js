const mongoose = require('mongoose')


const ProduitSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    prix: {
        type: Number,
        required: true
    },
    create_at: {
        type: Date,
        default: Date.now()
    } 
})

module.exports = mongoose.model('produits', ProduitSchema)