const express = require('express')
const app = express()   


app.set('views', './public/views');
app.set('view engine', 'pug');
app.use("/public", express.static('./public/'));
app.get("/", (req, res) => {
    res.render("index")
})

app.get("/post/:id", (req, res) => {
    var id = req.params.id;
    res.render("post", {
        id: id
    })
})

app.listen(process.env.PORT || 5000)