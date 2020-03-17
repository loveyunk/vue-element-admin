const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const pause = require('connect-pause');
const fs = require('fs');
const jwt = require('jsonwebtoken');

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(pause(500));

// MIDDLEWARE
function verifyToken(req, res, next) {
  const bearerHeader = req.headers.authorization;

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    // eslint-disable-next-line no-param-reassign
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(401);
  }
}

server.post('/login', (req, res) => {
  const userDB = fs.readFileSync('./db/user.json');
  const userInfo = JSON.parse(userDB);
  if (
    req.body &&
    req.body.email === userInfo.email &&
    req.body.password === userInfo.password
  ) {
    const token = jwt.sign({ userInfo }, 'the_secret_key');
    // In a production app, you'll want the secret key to be an environment variable
    res.json({
      error_code: 0,
      error_msg: '',
      data: {
        token,
        email: userInfo.email,
        name: userInfo.name,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/rez___a/128.jpg'
      }
    });
  } else {
    res.sendStatus(400);
  }
});

server.use(verifyToken, (req, res, next) => {
  jwt.verify(req.token, 'the_secret_key', err => {
    if (err) {
      res.sendStatus(401);
    } else {
      next();
    }
  });
});

router.render = (req, res) => {
  res.jsonp({
    data: res.locals.data,
    error_code: 0,
    error_msg: ''
  });
};

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running on port 3000!');
});
