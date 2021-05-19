const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./sqlite3/test.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the database.');
  });

//mock data
  let notelist =
    {
        date: '05/07/2021', 
        weight: 162.8,
        unit: 'lbs'
    };
 

console.log(notelist.date);
console.log(notelist.weight);
console.log(notelist.unit);

let sql = `INSERT INTO WeightTrack(Date, Weight, Unit) VALUES (?, ?, ?)`
// inserts one row into the WeightTrack table, (?, ? ,?) is placeholder values

db.run(sql, [notelist['date'], notelist['weight'], notelist['unit']], function(err) {
  if (err) {
    return console.log(err.message);
  }
  // get the last insert id
console.log(`A row has been inserted with rowid ${this.lastID}`);
});


// close the database connection
db.close()