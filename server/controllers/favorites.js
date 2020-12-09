const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getFavs = (req, res) => {
  let sql = "SELECT * FROM lfgusers.favorites WHERE id = ?"
  sql = mysql.format(sql, [ req.params.id ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const addFav = (req, res) => {
  const { userName, userPassword } = req.body
  let sql = "INSERT INTO lfgusers.favorites (userName) VALUES (?)"
  sql = mysql.format(sql, [ userName, userPassword ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}

const deleteFav = (req, res) => {
  let sql = "DELETE FROM lfgusers.favorites WHERE userName = ?"
  sql = mysql.format(sql, [ req.params.first_name ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  })
}


module.exports = {
  getFavs,
  addFav,
  deleteFav
}