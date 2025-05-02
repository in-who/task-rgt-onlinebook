import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI;

if (!MONGO_URI) throw new Error('MONGODB_URI 환경 변수 누락');

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

export default async function dbConnect() {
  if (cached.conn) return cached.conn;

  cached.promise = mongoose.connect(MONGO_URI, {
    bufferCommands: false,
    serverSelectionTimeoutMS: 5000 // ✅ 타임아웃 설정
  });

  cached.conn = await cached.promise;
  return cached.conn;
}
