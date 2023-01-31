import { useState } from "react";

export const MainView = () => {

  const [books, setBooks] = useState([]); // first item (books) is current state, second item (setBooks) is function that updates current state

  return (
    <div>
      <div>Eloquent JavaScript</div>
      <div>Mastering Javascript Functional Programming</div>
      <div>Javascript: The Good Parts</div>
      <div>Javascript: The Definitive Guide</div>
      <div>The Road to React</div>
    </div>
  );
};