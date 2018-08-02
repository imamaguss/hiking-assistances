const express = require('express');
const app = express();
const port = 3050;
const bodyParse = require('body-parser');
const ejs = require('ejs');
const model = require('./models');
const Provider = model.Provider;
const ProviderRouter = require('./router/provider');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('-----------------> masuk');
});

app.use('/provider', ProviderRouter);

app.get('/provider/new', (req, res) => {
  Provider.findAll().then(data => {
    res.render()
  })
});

app.post('/provider/new');

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});