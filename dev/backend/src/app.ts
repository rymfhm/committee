import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { createServer } from 'http';
import { Server } from 'socket.io';

import routes from './routes/index.js';

export const buildApp = () => {
  const app = express();
  app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
  app.use(express.json());
  app.use(morgan('dev'));

  app.use('/api', routes);

  const httpServer = createServer(app);
  const io = new Server(httpServer, { cors: { origin: process.env.CLIENT_URL } });

  io.on('connection', socket => {
    console.log('socket connected');
  });

  app.set('io', io);

  return { app, httpServer };
};


