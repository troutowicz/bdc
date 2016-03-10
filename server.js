import express from 'express';

const app = express(),
  host = 'localhost',
  port = '3000';

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset='UTF-8' />
        <title>BDC example</title>
      </head>
      <body>
        <div id='root'></div>
        <script src='bundle.js'></script>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log('Listening at http://%s:%s', host, port);
});
