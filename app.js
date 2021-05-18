const express = require('express')
const app = express()
const port = 3000

// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/images'))

//display ejs
app.set('views', './views')
app.set('view engine', 'ejs')

//display html
app.get('', (req, res) =>{
    res.render('yi_index.ejs')
})

// Listen on port
app.listen(port, () => console.log(`Listening on port ` + port))