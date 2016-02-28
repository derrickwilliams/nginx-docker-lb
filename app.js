import express from 'express';

const port = 5555; //process.env.APP_PORT;

let app = express();

app.get('/', (req, res) => {
  console.log('you got it', req.headers)
  res.json({ msg: 'HELLO' });
});

app.listen(port, () => console.log(`listening ${port}`));