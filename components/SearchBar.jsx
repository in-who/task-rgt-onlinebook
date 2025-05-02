// components/SearchBar.jsx
"use client";

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="책 제목 또는 저자로 검색"
      className="border border-gray-300 rounded px-4 py-2 w-full max-w-md"
    />
  );
}
