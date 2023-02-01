import { useState } from "react";
import { BookCard } from "./book-card/book-card";

export const MainView = () => {

  const [books, setBooks] = useState([
    { id: 1, title: "Eloquent Javascript" },
    { id: 2, title: "Mastering Javascript Functional Programming" },
    { id: 3, title: "Javascript: The Good Parts" },
    { id: 4, title: "Javascript: The Definitive Guide" },
    { id: 5, title: "The Road to React" }
  ]); // first item (books) is current state, second item (setBooks) is function that updates current state

  if (books.length === 0) {
    return <div>Books list is empty!</div>
  }

  return (
    <div>
      {books.map((book) => { <BookCard book={book}/> })}
    </div>
  );
};