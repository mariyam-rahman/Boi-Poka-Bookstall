import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../Utility/addToDB";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);
  const { bookName, author, image, review, rating, category, tags } = book;

  const handleRead = (id) => {
    addToStoredReadList(id);
  };

  return (
    <div className="card  grid grid-cols-2">
      <figure className=" py-8 ">
        <img className="w-[300px]" src={image} alt={bookName} />
      </figure>
      <div className="card-body">
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
        <div className="border border-dashed"> </div>
        <p>Review : {review}</p>
        <div className="flex gap-3">
          Tags:
          {tags.map((tag, i) => (
            <div key={i} className="badge badge-ghost p-3">
              {tag}
            </div>
          ))}
        </div>
        <div className="flex gap-4 my-6">
          <button onClick={() => handleRead(bookId)} className="btn px-9 ">
            Read
          </button>
          <button className="btn btn-outline px-9">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
