import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  const [books, setbooks] = useState([]);
  useEffect(() => {
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => setbooks(data));
  }, []);
  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-6">
        Books: {books.length}
      </h2>
      <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2">
        {books.map((book) => (
          <Book book={book} key={book.bookId}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
