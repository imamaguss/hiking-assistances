const express = require('express');
const app = express();
const port = 3050;
const bodyParse = require('body-parser').urlencoded({extended: true});
const ejs = require('ejs');
const model = require('./models');
const Provider = model.Provider;
const ProviderRouter = require('./router/provider');

app.set('view engine', 'ejs');
app.use(bodyParse);

app.use('/provider', ProviderRouter);

app.get('/', (req, res) => {
  res.send('HIKING ASSISTANCE APP');
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});