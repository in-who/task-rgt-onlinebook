"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import { useSearchParams, useRouter } from "next/navigation";
import { MutatingDots } from "react-loader-spinner";
import BookCard from "@/components/BookCard";
import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";

const PAGE_SIZE = 10;
/*
export default function SeeAll() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const heading = searchParams.get("heading") || "";
  //const order = searchParams.get("order") || ""; // 현재 백엔드에서 정렬 미구현 시 무시 가능
  const title = searchParams.get("title") || "Book List";
  const pageParam = searchParams.get("page");
  const initialPage = pageParam ? parseInt(pageParam) : 1;
  const initialSearch = searchParams.get("search") || "";

  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [totalItems, setTotalItems] = useState(0);
  const [search, setSearch] = useState(initialSearch);

  useEffect(() => {
    async function fetchBooks() {
      try {
        setLoading(true);
        const params = new URLSearchParams({
          page: page.toString(),
          search,
          heading,
        });
        const apiUrl = `/api/books?${params.toString()}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        setBooks(data.books || []);
        setTotalItems(data.totalItems || 0);
        setLoading(false);
      } catch (error) {
        console.error("An error occurred:", error);
        setBooks([]);
        setLoading(false);
      }
    }
    fetchBooks();
  }, [search, heading, page]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
    router.replace(
      `/SeeAll?heading=${heading}&title=${title}&search=${encodeURIComponent(
        e.target.value
      )}&page=1`
    );
  };

  const totalPages = Math.ceil(totalItems / PAGE_SIZE);

  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-6 justify-start md:px-8">
      <h1 className="font-main text-xl my-4 flex justify-center font-semibold mr-auto md:text-2xl ">
        {title}
      </h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="책 제목 또는 저자 검색"
          className="border border-gray-300 rounded px-4 py-2 w-full max-w-md"
        />
      </div>

      <div className="flex justify-center">
        {loading ? (
          <MutatingDots
            height="100"
            width="100"
            color="#ff0000"
            secondaryColor="#ff0000"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            visible={true}
          />
        ) : (
          <Card books={books} />
        )}
      </div>

      <div className="flex justify-center space-x-4 mt-6">
        <button
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          이전
        </button>
        <span className="px-4 py-2">
          {page} / {totalPages}
        </span>
        <button
          disabled={page >= totalPages}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          다음
        </button>
      </div>
    </div>
  );
};
*/
export default function SeeAllPage() {
  //const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const totalPages = 5; // 예시
  //const [isLoading, setIsLoading] = useState(true);

  return (
    <main>
      {isLoading && <div>로딩 중...</div>} {/* TODO :: 실제 로딩 UI */}
    <div>
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="grid grid-cols-3 gap-4 mt-4">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
    </main>
  );
}
