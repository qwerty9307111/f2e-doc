const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 8888

const server = http.createServer(function (req, res) {
  if (req.url === '/favicon.ico') {
    return;
  }

  const parseUrl = url.parse(req.url, true);

  console.log('parseUrl', parseUrl.pathname)

  if (parseUrl.pathname === '/api/getList') {
    const list = {'a': 1, 'b': 2}
    res.writeHead(200, {'content-Type':'text/html;charset=UTF-8'})
    res.end(JSON.stringify(list))
  } else {
    res.write(`
    port: ${port}
  `)
    res.end()
  }
});

server.listen(port, function () {
  console.log('server is starting on port ' + port);
});
