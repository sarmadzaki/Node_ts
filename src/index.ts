import express from 'express';
import { createWriteStream } from 'fs';
import Routes from './APIs';
import morgan from 'morgan';
const app = express();
const port = 3000;

app.use(morgan('common', {
  stream: createWriteStream('./logger.log', {flags: 'a'})
}));
app.use(morgan('dev'));
/** Routes Definition */
app.use('/api/', Routes);

/** Server Initialization */
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});