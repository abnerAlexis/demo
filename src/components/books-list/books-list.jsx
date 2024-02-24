import React from "react";
import { useSelector } from "react-redux";
import { BookCard } from "../book-card/book-card";
import { BooksFilter } from "../books-filter/books-filter";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const BooksList = () => {
    const books = useSelector((state) => state.books.list);
    const filter = useSelector((state) => state.books.filter)
        .trim()
        .toLowerCase();

    const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(filter));
    console.log("Books: " + JSON.stringify(books));
    console.log("Filtered Books: " + JSON.stringify(filteredBooks));

    return (
        <>
            <Row>
                <BooksFilter />
            </Row>
            <Row>
                {books.length === 0 ? (
                    <Col>No books to show.</Col>
                ) : (
                    filteredBooks.map((book) => {
                        <Col className="mb-4" key={book.id} md={3}>
                            <BookCard book={book} />
                        </Col>
                    })
                )}
            </Row>
        </>
    )
}