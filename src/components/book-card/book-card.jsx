<<<<<<< HEAD
export const BookCard = ({ book, onBookClick }) => {
    return (
      <div
        onClick={() => {
          onBookClick(book);
        }}
      >
        {book.title}
      </div>
    );
  };
=======
export const BookCard = (props) => {
    const {bookData} =props;
    return <div>{bookData.title}</div>;
}
>>>>>>> origin/main
