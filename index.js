const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json())

let articleControler=require('./controlers/articles.conroler')
const {body}=require("express-validator")






//server listening on which port
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
