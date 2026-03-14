import dotenv from 'dotenv';
dotenv.config();

import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sumsub from './router/sumsub';

const app = express();
const port = process.env.PORT || 3000;

if (process.env.ENV === 'test') {
  app.use(cors());
}

app.use(
  express.json({
    verify: (req, res, buf, encoding) => {
      if (req.url === '/sumsub/webhook') {
        (req as any)['rawBody'] = buf.toString('utf-8');
      }
    },
  }),
); // 解析 JSON 格式的请求体
app.use(bodyParser.urlencoded({ extended: true })); // 解析 URL-encoded 格式的请求体

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.use('/sumsub', sumsub);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
