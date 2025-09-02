const express = require("express");
const app = express();

app.get('/blog/:judul', (req, res) => {
    const { judul } = req.params;
    res.send(`Kita sedang melihat postingan dengan judul: ${judul}`);
});

app.get('/blog/:category/:judul/:author', (req, res) => {
    const { category, judul, author } = req.params;
    res.send(`Blog dengan kategori: ${category} | Author: ${author} | ${judul}`);
});

app.get('*', (req, res) => {
    res.send('halaman tidak ditemukan');
});

app.listen(8080, () => {
  console.log(`Server is running on http://localhost:8080`);
});
