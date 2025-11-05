const express = require('express');
const path = require('path');
const compression = require('compression');
const expressStaticGzip = require('express-static-gzip');
const rateLimit = require('express-rate-limit');

const app = express();
const port = 3000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: 'Too many requests from this IP, please try again after 15 minutes.',
});

app.use(limiter);

app.use(compression());

app.use(
  express.static(path.join(__dirname, 'dist')),
  expressStaticGzip('dist', {
    enableBrotli: true,
    orderPreference: ['br'],
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.br')) {
        res.setHeader('Content-Encoding', 'br');
        res.setHeader('Content-Type', 'application/javascript');
      }
    },
  })
);

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server ready at port ${port}`);
});
