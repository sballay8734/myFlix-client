export const BookCard = ({ book, onBookClick }) => {
  return (
    <div onClick={() => {onBookClick(book);}}>{book.title}</div>
  )
};