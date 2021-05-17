const next    = require('next');

const port   = +process.env.PORT || 3000;
const dev    = process.env.NODE_ENV === 'development';
const app    = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const express = require('express');
  const server = express();
  
  if (process.env.NODE_ENV === 'staging') {
    const basicAuth = require('express-basic-auth');
    server.use(basicAuth({
      challenge           : true,
      unauthorizedResponse: () => 'Unauthorized',
      authorizer          : (username, password) => {
        const userMatch = basicAuth.safeCompare(username, 'staging-reviewer');
        const passMatch = basicAuth.safeCompare(password, 'shiki');
        
        return userMatch && passMatch;
      },
    }));
  }
  
  if (!dev) {
    server.get('/', (req, res) => res.redirect(
      302,
      process.env.NODE_ENV === 'production' ? '/70th/' : '/staging/',
    ));
  }
  
  server.all('*', (req, res) => {
    return handle(req, res);
  });
  
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Ready on :${ port }`);
  });
});