export const BookView = ({ book, onBackClick }) => {
  return (
    <div>
      <div>
        <img alt="" src={book.image} />
      </div>
      <div>
        <span>Title: </span>
        <span>{book.title}</span>
      </div>
      <div>
        <span>Author: </span>
        <span>{book.author}</span>
      </div>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};