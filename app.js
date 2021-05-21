const express = require('express')
const app = express()
const port = 3000
const sqlite3 = require('sqlite3').verbose()

// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/images'))

// // database object
// let db = new sqlite3.Database('db/test.db', sqlite3.OPEN_READWRITE, (err) => {
//     if (err) {
//         console.error(err.message);
//     }
//     else{
//         console.log('Connected to the database.');
//     }
// })

//sqlite connect
let db = new sqlite3.Database('./db/test.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the database.');
  });

//display ejs
app.set('views', './views')
app.set('view engine', 'ejs')

//display html
// app.get('/', (req, res) =>{
//     // res.render('yi_index.ejs')
//     let sql = `SELECT Date date FROM WeightTrack
//     ORDER BY EntryID`;

//     db.all(sql, [], (err, rows) => {
//         if (err) {
//           throw err;
//         }
//         res.render('yi_index.ejs', { _data : rows});
//         });
//       });

app.get('', (req, res) =>{
  let sql = `SELECT EntryID entryid, Date date, Weight weight, Unit unit FROM WeightTrack
  ORDER BY EntryID`;

  db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      res.render('yi_index.ejs', { _data : rows});
      });
    });


app.get('/yi_index.ejs', (req, res) =>{
    let sql = `SELECT EntryID entryid, Date date, Weight weight, Unit unit FROM WeightTrack
    ORDER BY EntryID`;

    db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        res.render('yi_index.ejs', { _data : rows});
        });
      });


var appjs = require('./public/js/weightscripts')
console.log(appjs.newEntry());
newEntry = appjs.newEntry()
console.log(newEntry.date);
console.log(newEntry.weight);
console.log(newEntry.unit);

app.use(express.urlencoded({
  extended: true
}))

// insert
app.post("/new", (req, res) => {
  var newent = req.body.weight;
  var newdate = req.body.date;
  console.log(newent)
  console.log(newdate)
  const sql = `INSERT INTO WeightTrack(Date, Weight, Unit) VALUES (?, ?, ?)`

  db.run(sql, [newdate, newent, newEntry['unit']], function(err) {
    if (err) {
      return console.log(err.message);
    }
    res.redirect("/");
});
});

// update
app.post("/edit", (req, res) => {
  const id = req.body.id;
  var newent = req.body.weight;
  const sql = 'UPDATE WeightTrack SET weight = ? WHERE EntryID = ?'

  db.run(sql, [newent, id], function(err) {
    if (err) {
      return console.log(err.message);
    }
    res.redirect("/");
  });
});

// delete
app.post("/delete", (req, res) => {
  const id = req.body.id;
  const sql = 'DELETE FROM WeightTrack WHERE EntryID = ?'
  db.run(sql, id,function(err) {
    if (err) {
      return console.error(err.message);
    }
    res.redirect("/");
  });
});

app.get('/plans.ejs', (req, res) =>{
    res.render('plans.ejs')
})

app.get('/running.ejs', (req, res) =>{
  res.render('running.ejs')
})

// Listen on port
app.listen(port, () => console.log(`Listening on port ` + port))
