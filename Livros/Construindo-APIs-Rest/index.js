const express        = require('express');
const consign        = require('consign')
const app            = express();
const PORT           = 3000;

app.set("json spaces" , 4)

consign()
.include('models')
.then('routes')
.into(app)


app.listen(PORT , ()=> {
  console.log(`NTask API - porta ${PORT}`);
});