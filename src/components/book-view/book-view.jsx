import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./book-view.scss";
import { useSelector } from "react-redux";

export const BookView = () => {
  const books = useSelector((state) => state.books.list);
  const { bookId } = useParams();

  const book = books.fimd((b) => b.id === bookId);

  return (
    <div>
      <div>
        <img className="w-100" src={book.image} />
      </div>
      <div>
        <span>Title: </span>
        <span>{book.title}</span>
      </div>
      <div>
        <span>Author: </span>
        <span>{book.author}</span>
      </div>
      <Link to={`/`}>
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};