const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
    res.json([
        { id: 1, name: "Perfume A", price: 1200 },
        { id: 2, name: "Perfume B", price: 1500 }
    ]);
});

app.listen(5000, () => {
    console.log("Backend server running on port 5000");
});