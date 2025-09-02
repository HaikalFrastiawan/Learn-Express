const express = require('express');
const app = express();

app.get('/blog/:judul', (req, res) => {
    const { judul } = req.params;
    res.send(`Kita sedang melihat postingan dengan judul: ${judul}`);
});

app.get('/blog/:category/:judul/:author', (req, res) => {
    const { category, judul, author } = req.params;
    res.send(`Blog dengan kategori: ${category} | Author: ${author} | ${judul}`);
});


app.get('/search', (req, res) => {
    const { q } = req.query;

    if (!q) {
        return res.send(`<h1>Tidak ada data yang dicari</h1>`);
    }

    res.send(`<h1>Search keyword: ${q}</h1>`);
});


app.get('*', (req, res) => {
    res.send('halaman tidak ditemukan');
});

app.listen(8080, () => {
  console.log(`Server is running on http://localhost:8080`);
});
