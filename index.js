const express = require('express');
const app = express();

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
