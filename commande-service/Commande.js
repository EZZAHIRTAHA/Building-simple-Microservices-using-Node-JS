const mongoose = require('mongoose')



const CommandeSchema = mongoose.Schema({
  produits: [{
    produitId: { type: mongoose.Schema.Types.ObjectId, ref: 'Produit', required: true },
    prix: { type: Number, required: true },
  }],
  date: { type: Date, default: Date.now },
});

const Commande = mongoose.model('Commande', CommandeSchema);

module.exports = Commande;
