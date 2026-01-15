const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.static('public'));

app.get('/radios', async (req, res) => {
  try {
    const language = req.query.language || 'ar';
    const response = await fetch(`http://api.mp3quran.net/radios/get_radios.php?language=${language}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "حدث خطأ أثناء جلب محطات الراديو" });
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
