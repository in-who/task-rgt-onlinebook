import React from "react";
import EditBookForm from "@/components/EditBookForm"; // 클라이언트 컴포넌트
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import dbConnect from "@/lib/dbConnect";
import Book from "@/models/Book";

export default async function BookDetailPage({ params }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/Login");

  await dbConnect();

  const book = await Book.findById(params.id).lean();

  if (!book) {
    return <div>책을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h1>책 상세 및 수정</h1>
      <EditBookForm book={book} />
    </div>
  );
}
