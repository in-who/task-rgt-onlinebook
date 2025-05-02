// app/api/books/route.js
import dbConnect from "@/lib/dbConnect";
import Book from "@/models/Book";

export async function GET(req) {
  await dbConnect();

  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;
  const search = searchParams.get("search") || "";

  // 검색 조건 구성
  const query = search
    ? {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { author: { $regex: search, $options: "i" } },
        ],
      }
    : {};

  const skip = (page - 1) * limit;

  const [books, total] = await Promise.all([
    Book.find(query).skip(skip).limit(limit),
    Book.countDocuments(query),
  ]);
  

  return new Response(
    JSON.stringify({
      books,
      totalItems: total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}

export async function POST(req) {
    await dbConnect();
  
    const body = await req.json();
  
    const newBook = new Book(body);
    await newBook.save();
  
    return new Response(JSON.stringify(newBook), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  }
