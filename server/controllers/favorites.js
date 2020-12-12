const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

// const getFavs = (req, res) => {
//   pool.query(
//     "SELECT * FROM lfgusers.favorites WHERE username = ?",
//     (err, rows) => {
//       if (err) return handleSQLError(res, err);
//       return res.json(rows);
//     }
//   );
// };

const getFavs = (req, res) => {
  let sql = "SELECT * FROM lfgusers.favorites WHERE username = ?";
  sql = mysql.format(sql, [req.params.id]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const addFav = (req, res) => {
  const { username, gameID, gameName } = req.body;
  let sql =
    "INSERT INTO lfgusers.favorites (username, gameID, gameName) VALUES (?, ? , ?)";
  sql = mysql.format(sql, [username, gameID, gameName]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ message: `user ${username} favorite added` });
  });
};

const deleteFav = (req, res) => {
  let sql = "DELETE FROM lfgusers.favorites WHERE gameId = ?";
  sql = mysql.format(sql, [req.params.id]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  });
};

module.exports = {
  getFavs,
  addFav,
  deleteFav,
};
