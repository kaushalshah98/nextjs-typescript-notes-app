import mongoose from 'mongoose';
import { env } from '../next.config';

const connection = {
  isConnected: 0,
};

const dbConnect = async () => {
  if (connection.isConnected) return;
  const db = await mongoose.connect(env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  connection.isConnected = db.connections[0].readyState;
  console.log(connection.isConnected);
};
export default dbConnect;
