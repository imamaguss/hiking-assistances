const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const ejs = require('ejs');

// const routerTeacher = require('./router/teacher');
// const routerSubject = require('./router/subject');

const port = 3050;
app.set('view engine', 'ejs');
app.use(express.static('style'))

// app.use('/teacher', routerTeacher);
// app.use('/subject', routerSubject);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});