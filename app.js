const express = require('express')

const app = express()   

app.set('views', './public/views');
app.set('view engine', 'pug');
app.use("/public", express.static('./public/'));
app.get("/", (req, res) => {
    res.render("index")
})

// app.get("/other-link", (req, res) => {
//     res.render("other-link")
// })

app.listen(process.env.PORT || 5000)