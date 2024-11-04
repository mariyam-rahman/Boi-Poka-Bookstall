import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../Utility/addToDB";
import Book from "../Books/Book";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const allBook = useLoaderData();
  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    // console.log(storedReadList);
    // console.log(storedReadListInt);
    const readBookList = allBook.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);

  return (
    <div>
      <h3 className="text-3xl my-6">ListedBooks</h3>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          <h3 className="text-2xl my-6">Book I Read: {readList.length} </h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            {readList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h3 className="text-2xl my-6">Wishlist</h3>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
