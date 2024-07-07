const express = require('express');
const app = express();
const PORT = 4000;
require('dotenv').config();
app.use(express.json())

const articlesRouter = require('./routes/articles.route');

const mongoose=require('mongoose')

// const options = {
//   serverSelectionTimeoutMS: 30000, // Increase server selection timeout to 30 seconds
//   socketTimeoutMS: 30000 // Increase socket timeout to 30 seconds
// };
// console.log(new Date())
mongoose.connect(process.env.MONGOOSE_LINK)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

app.use('/articles',articlesRouter)

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
