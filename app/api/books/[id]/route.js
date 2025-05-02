// app/api/books/[id]/route.js
import dbConnect from "@/lib/dbConnect";
import Book from "@/models/Book";

export async function GET(req, { params }) {
  await dbConnect();

  const { id } = params;
  const book = await Book.findById(id);

  if (!book) {
    return new Response(JSON.stringify({ error: "책을 찾을 수 없습니다." }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(book), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function PUT(req, { params }) {
  await dbConnect();

  const { id } = params;
  const body = await req.json();

  const updatedBook = await Book.findByIdAndUpdate(id, body, { new: true });

  if (!updatedBook) {
    return new Response(JSON.stringify({ error: "책을 찾을 수 없습니다." }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(updatedBook), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(req, { params }) {
  await dbConnect();

  const { id } = params;
  const deletedBook = await Book.findByIdAndDelete(id);

  if (!deletedBook) {
    return new Response(JSON.stringify({ error: "책을 찾을 수 없습니다." }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(null, { status: 204 });
}
