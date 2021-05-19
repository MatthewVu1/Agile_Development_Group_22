const express = require('express')
const app = express()
const port = 3000
const sqlite3 = require('sqlite3').verbose()

// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/images'))

//database object
let db = new sqlite3.Database('C:/Users/xubry_000/desktop/ACIT2911/Agile_Development_Group_22/db/test.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    else{
        console.log('Connected to the database.');
    }
})

//display ejs
app.set('views', './views')
app.set('view engine', 'ejs')

//display html
app.get('/yi_index.ejs', (req, res) =>{
    res.render('yi_index.ejs')
})

app.get('/plans.ejs', (req, res) =>{
    res.render('plans.ejs')
})

// Listen on port
app.listen(port, () => console.log(`Listening on port ` + port))