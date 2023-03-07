const express = require('express');
const app = express();

const authorised = '*'; //http://localhost:4200';
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', authorised);
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, Identification');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next(); 
});

// Route pour le calcul du prix de l'électricité
app.get('/prix-electricite/:km', (req, res) => {
  const km = parseFloat(req.params.km);
  const prix = km * 0.10; // 10 centimes par km
  res.json({ prix: prix });
});

// Démarrage du serveur
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
