const express = require(`express`);
const app = express();
const port = 3000;
const posts = require(`./data/posts.js`);

app.use(express.static(`public`));

app.get("/", (req, res) => {
    res.send(`Server del mio Blog`);
});

app.get("/bacheca", (req, res) => {
    res.send({
        data: posts,
        count: posts.length
    });
});

app.listen(port, () => {
    console.log(`Server in ascolto`); 
});