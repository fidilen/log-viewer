const cors = require('cors');
const express = require('express');

const app = express();
const port = "33100";

app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');

app.get("/logs/:name/:project/:type", async (req, res) => {
    const name = req.params.name
    const project = req.params.project
    const type = req.params.type

    const path = `/home/user_${name}/.pm2/logs/${project}-${type}.log`

    res.sendFile(path);
});

app.listen(port, () => console.log(`App running on port ${port}!`));