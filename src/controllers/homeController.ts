// import connection from "../config/database";

// const getAccount = (req: any, res: any) => {
//   connection.getConnection((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL Database!');

//     // Example query
//     connection.query('SELECT * FROM Account', (err, rows, fields) => {
//       if (err) throw err;
//       console.log(fields);
//       console.log("the rows effect", rows);
//       res.send(JSON.stringify(rows));
//     });

//     // Close the connection
//     connection.releaseConnection();
//   });

// };

// const getAbc = (req, res) => {
//   res.render("sample.ejs");
// };

// module.exports = {
//   getAccount,
//   getAbc,
// };
