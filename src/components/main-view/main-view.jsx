import { useState } from "react";
import { BookCard } from "./book-card/book-card";

export const MainView = () => {

  const [books, setBooks] = useState([
    { id: 1,
      title: "Eloquent Javascript",
      image: "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg",
      author: "Marijn Haverbeke"
    },
    { id: 2,
      title: "Mastering Javascript Functional Programming",
      image: "https://images-na.ssl-images-amazon.com/images/I/51WAikRq37L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      author: "Federico Kereki"
    },
    { id: 3,
      title: "Javascript: The Good Parts",
      image: "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg",
      author: "Douglas Crockford"
    },
    { id: 4,
      title: "Javascript: The Definitive Guide",
      image: "https://images-na.ssl-images-amazon.com/images/I/51HbNW6RzhL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      "David Flanagan"
    },
    { id: 5,
      title: "The Road to React",
      image: "https://images-na.ssl-images-amazon.com/images/I/41MBLi5a4jL._SX384_BO1,204,203,200_.jpg",
      author: "Robin Wieruch"
    }
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