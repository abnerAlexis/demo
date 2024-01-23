//Importing prop-types
import PropTypes from "prop-types";
import {Button, Card} from "react-bootstrap"

export const BookCard = ({ book, onBookClick }) => {
  return (
    <Card onClick={() => onBookClick(book)}>
      <Card.Img variant="top" src={book.image} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.author}</Card.Text>
        <Button //onClick={() => onBookClick(book)} 
          variant="link">
          Open
        </Button>
      </Card.Body>
    </Card>
  );
};

//Defining all the props constraints for the BookCard
BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string,
  }).isRequired,
  onBookClick: PropTypes.func.isRequired,
};
