const express = require(`express`);
const app = express();
const port = 3000;

app.use(express.static('public'));


app.get("/", (req, res) => {
    res.send("Server del mio blog");
});

app.get(`/bacheca`, (req, res) => {

    const post = [
        {
            titolo: "ciambellone",
            contenuto: "foto di ciambellone",
            img: "http://localhost:3000/images/ciambellone.jpeg",
            tags: "dolci, fatto in casa, ciambellone",
        },
        {
            titolo: "cracker barbabietola",
            contenuto: "foto di cracker alla barbabietola",
            img: "http://localhost:3000/images/cracker_barbabietola.jpeg",
            tags: "cracker, fatto in casa",
        },
        {
            titolo: "pane fritto",
            contenuto: "foto di pane fritto dolce",
            img: "http://localhost:3000/images/pane_fritto_dolce.jpeg",
            tags: "dolci, pane fritto",
        },
        {
            titolo: "pasta barbabietola",
            contenuto: "foto di pasta alla barbabietola",
            img: "http://localhost:3000/images/pasta_barbabietola.jpeg",
            tags: "pasta",
        },
        {
            titolo: "torta paesana",
            contenuto: "foto di torta paesana",
            img: "http://localhost:3000/images/torta_paesana.jpeg",
            tags: "dolci, torta paesana",
        },
    ];
    res.json(post)
});

app.listen(port, () => {
    console.log(`La porta è ${port}`);
});

