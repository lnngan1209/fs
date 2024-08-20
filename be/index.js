const express = require('express');
const app = express();

app.get('/api/flowers', (req, res) => {
  res.json([
    { id: 1, name: 'Rose', price: 10 },
    { id: 2, name: 'Tulip', price: 15 }
  ]);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
