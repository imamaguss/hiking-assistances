const express = require('express');
const app = express();
const port = 3050;
const bodyParse = require('body-parser')
const ejs = require('ejs');
const model = require('./models');
const Provider = model.Provider;
const ProviderRouter = require('./router/provider');
const CustomerRouter = require('./router/customer');
const BookingRouter = require('./router/booking');

app.set('view engine', 'ejs');

app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json())

app.use('/provider', ProviderRouter);
app.use('/customer', CustomerRouter);
app.use('/booking', BookingRouter);
app.use(express.static('style'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});