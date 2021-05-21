const next     = require('next');
const port     = +process.env.PORT || 8080;
const dev      = process.env.NODE_ENV === 'development';
const basePath = process.env.NODE_ENV === 'production' ? '/70th/' : '/staging/';
const app      = next({ dev });
const handle   = app.getRequestHandler();

const AUTH_USER = 'staging-reviewer';
const AUTH_PASS = 'shiki';

app.prepare().then(() => {
  const express = require('express');
  const server  = express();
  
  if (process.env.NODE_ENV === 'staging') {
    const basicAuth = require('express-basic-auth');
    server.use(basicAuth({
      challenge           : true,
      unauthorizedResponse: () => 'Unauthorized',
      authorizer          : (username, password) => {
        const userMatch = basicAuth.safeCompare(username, AUTH_USER);
        const passMatch = basicAuth.safeCompare(password, AUTH_PASS);
        
        return userMatch && passMatch;
      },
    }));
  }
  
  if (!dev) {
    server.get('/', (req, res) => res.redirect(
      302,
      basePath,
    ));
  }
  
  server.all('/70th/', (req, res, next) => {
    req.url = basePath.slice(0, -1);
    next();
  });
  
  server.all('*', (req, res) => {
    return handle(req, res);
  });
  
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Ready on :${ port }`);
  });
});