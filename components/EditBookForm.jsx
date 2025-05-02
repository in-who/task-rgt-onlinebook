"use client";
import React, { useState } from "react";

export default function EditBookForm({ book }) {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [stock, setStock] = useState(book.stock);

  const handleUpdate = async () => {
    const res = await fetch(`/api/books/${book._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author, stock }),
    });
    if (res.ok) alert("수정 완료");
    else alert("수정 실패");
  };

  const handleDelete = async () => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    const res = await fetch(`/api/books/${book._id}`, { method: "DELETE" });
    if (res.ok) {
      alert("삭제 완료");
      // 삭제 후 페이지 이동 예: window.location.href = "/Dashboard";
    } else alert("삭제 실패");
  };

  return (
    <div>
      <label>
        제목:
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        저자:
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <label>
        재고 수량:
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(Number(e.target.value))}
        />
      </label>
      <button onClick={handleUpdate}>수정</button>
      <button onClick={handleDelete} style={{ marginLeft: "1rem" }}>
        삭제
      </button>
    </div>
  );
}
