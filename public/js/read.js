const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./sqlite3/test.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the database.');
  });

  let sql = `SELECT Date date, Weight weight, Unit unit FROM WeightTrack
             ORDER BY EntryID`;
  
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      console.log(row.date);
      console.log(row.weight);
      console.log(row.unit);
      let entry = [{title: row.date, body: row.weight + row.unit}];
      notelist.push(entry)
      console.log(notelist)
    });
  });
  
  // close the database connection
  db.close();