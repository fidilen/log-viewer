const fs = require('fs');

const cors = require('cors');
const express = require('express');

const DIR_PATH = `/`;

const app = express();
const port = "33100";

app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');

app.get("/logs", async (req, res) => {
    let fileNames = fs.readdirSync(DIR_PATH)
        .filter(file => file.includes('.') && !file.startsWith('.'));

    res.render('pages/files', {
        files: fileNames
    });
});

app.get("/file/:file", async (req, res) => {
    res.sendFile(`${DIR_PATH}/${req.params.file}`);
});

app.listen(port, () => console.log(`App running on port ${port}!`));