import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96  p-6 border-2 border-gray-100">
        <figure className="bg-gray-100 py-8 rounded-2xl">
          <img
            className="w-[166px] h-[300px] object-cover"
            src={image}
            alt={bookName}
          />
        </figure>
        <div className="card-body">
          <div className="flex gap-3">
            {tags.map((tag, i) => (
              <div key={i} className="badge badge-ghost p-3">
                {tag}
              </div>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p className="">By : {author}</p>
          <div className="border border-dashed"> </div>
          <div className="card-actions justify-between">
            <div className="">{category}</div>
            <div className="">
              {rating}{" "}
              <div className="rating rating-xs">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
