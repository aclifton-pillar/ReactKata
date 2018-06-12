const express = require('express');

const recipe1 = {"id": 1, "name": "Biscuits and Gravy", "rating": 5};
const recipe2 = {"id": 2, "name": "Tacos", "rating": 6};
const recipes = {"items": [recipe1, recipe2]};

startServerAsync(process.argv[2] || 9000);

function startServerAsync(port) {

    const app = express();

    app.get('/recipes', (req, res) => {
        console.log("getting recipes");
        res.json(recipes);
    });

    app.listen(port, () => {
        console.log(`Listening on port ${port}...`)
    });
}

