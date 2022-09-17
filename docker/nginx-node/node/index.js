const express = require('express')
const app = express()

const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const mysql = require('mysql')

app.get('/', function (req, res) {

  var conn = mysql.createConnection(config)

  conn.query(`INSERT INTO people(name) values('Tiago Lorenzetti')`)

  conn.query('select * from people', function (err, results) {

    var rs = [];

    results.forEach(element => {
      rs.push("<br>" + element.id + " - " + element.name);
    })

    res.send('</p>' +
      '<p><h1>Full Cycle Rocks!<h1></p>' +
      '</p>' +
      '<p>- Lista de nomes cadastrada no banco de dados.</p>' + rs
    )

  });

  conn.end();
});

app.listen(port, () => {
  console.log('Rodando na porta ' + port)
})