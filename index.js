const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json())

const articles=[
  {
    "id":1,
    "title":"global warming",
    "date":"2024-7-4",
    "description":"Global warming is the long-term warming of the planet’s overall temperature. Though this warming trend has been going on for a long time, its pace has significantly increased in the last hundred years due to the burning of fossil fuels. As the human population has increased, so has the volume of fossil fuels burned. Fossil fuels include coal, oil, and natural gas, and burning them causes what is known as the “greenhouse effect” in Earth’s atmosphere."
  },
  {
    "id":2,
    "title":"mike tyson",
    "date":"2024-7-4",
    "description":"A member of various street gangs at an early age, Tyson was sent to reform school in upstate New York in 1978. At the reform school, social worker and boxing aficionado Bobby Stewart recognized his boxing potential and directed him to renowned trainer Cus D’Amato, who became his legal guardian. Tyson compiled a 24–3 record as an amateur and turned professional in 1985."
  }
]
// get all articles
app.get('/articles', (req, res) => {
  res.json(articles);
});
//get single course with id 
app.get('/articles/:articleId',(req,res)=>{
  id=+req.params.articleId
  
  const article=articles.find((article)=>article.id===id)
  if(article===undefined){
    res.status(404).json("there is no course with this id")
  }
  else {
    res.json(articles[id-1])
  }
})
//create article
app.post('/createArticle',(req,res)=>{
  articles.push({id:articles.length+1,...req.body})
  res.status(201).json(articles)
})
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
