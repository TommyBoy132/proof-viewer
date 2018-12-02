const express = require('express');
const exphbs = require('express-handlebars');
const proofs = require('./spoofDB');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req,res)=>{
  res.render('gallery', {proofs:proofs});
});


const port = process.env.PORT || 5000;
app.listen(port, ()=>{
  console.log("Server started");
});