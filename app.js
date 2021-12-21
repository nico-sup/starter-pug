const express = require('express')
const app = express()   
app.set('views', './src/views');
app.set('view engine', 'pug');
app.use("/src", express.static('./src/'));
app.get("/", (req, res) => {
res.render("index")
})
app.listen(process.env.PORT || 5000)