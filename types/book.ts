export interface Book {
    _id: string;
    title: string;
    author: string;
    stock: number;
    price: number;
    description?: string;
    createdAt?: string;
  }
  