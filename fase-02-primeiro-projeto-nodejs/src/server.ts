import express from 'express';

import routes from './routes';

const app = express();

app.get('/', (request, response) => response.json({ message: 'hellow world' }));

app.listen(3333, () => {
  console.log('Server running in port 3333!');
});
