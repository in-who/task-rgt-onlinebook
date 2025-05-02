// components/BookCard.jsx
"use client";

import React from 'react';

export default function BookCard({ book }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <h2 className="text-lg font-semibold">{book.title}</h2>
      <p className="text-sm text-gray-600">저자: {book.author}</p>
      <p className="mt-2">{book.description?.slice(0, 100)}...</p>
      <p className="mt-2 font-bold">재고: {book.stock}</p>
      <p>가격: {book.price}원</p>
    </div>
  );
}
