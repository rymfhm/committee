import 'dotenv/config';
import { buildApp } from './app.js';
import { connectDB } from './config/db.js';

const PORT = process.env.PORT || 4000;

(async () => {
  await connectDB(process.env.MONGO_URI as string);
  const { httpServer } = buildApp();
  httpServer.listen(PORT, () => console.log(`Server on ${PORT}`));
})();


