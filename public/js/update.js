const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./sqlite3/test.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the database.');
  });

  let notelist =
    {
        date: '05/07/2021', 
        weight: 168.8,
        unit: 'lbs'
    };


    let sql = 'UPDATE WeightTrack SET weight = ? WHERE date = ?'



console.log(notelist.date);
console.log(notelist.weight);
console.log(notelist.unit);

// updates row
db.run(sql, [notelist['weight'], notelist['date']], function(err) {
  if (err) {
    return console.log(err.message);
  }
console.log(`Row(s) updated: ${this.changes}`);
});


// close the database connection
db.close()