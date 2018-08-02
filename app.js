const express = require('express');
const app = express();
const port = 3050;
const bodyParse = require('body-parser').urlencoded({extended: true});
const ejs = require('ejs');
const model = require('./models');
const Provider = model.Provider;
const ProviderRouter = require('./router/provider');
const CustomerRouter = require('./router/customer');

app.set('view engine', 'ejs');

app.use('/provider', ProviderRouter);
app.use('/customer', CustomerRouter);
app.use(express.static('style'));
app.use(bodyParse);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});