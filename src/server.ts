import express from 'express';
import 'module-alias/register';
import 'reflect-metadata';

const app = express();
import { handlingCheckEnv } from './infrastructure/ENV';
import db from './infrastructure/db';

handlingCheckEnv();
db.$connect().catch((e) => {
  console.error(`ERROR CONNECTING TO DATABASE: ${e}`);
  process.exit(1);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
