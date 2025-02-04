const express = require(`express`);
const app = express();
const port = 3000;


app.get(`/`, (req, res) => {
    res.send("Ciao")
})

app.listen(port, () => {
    console.log(`La porta è ${port}`);
})
