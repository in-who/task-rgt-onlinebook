// models/Book.js
import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    stock: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
  });
  
  export default mongoose.models.Book || mongoose.model("Book", BookSchema);
