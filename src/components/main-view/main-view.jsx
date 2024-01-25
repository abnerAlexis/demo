import { useState, useEffect } from "react";
import { BookCard } from "../book-card/book-card";
import { BookView } from "../book-view/book-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const MainView = () => {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=star+wars")
      .then((response) => response.json())
      .then((data) => {
        const booksFromApi = data.docs.map((doc) => {
          return {
            id: doc.key,
            title: doc.title,
            image: `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
            author: doc.author_name?.[0],
          };
        });

        setBooks(booksFromApi);
      });
  }, []);

  return (
    <BrowserRouter>
      <Row className="justify-content-md-center">
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>
            }
          />
          <Route 
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView onLoggedIn={(user) => setUser(user)} />
                  </Col>
                )}
              </>
            }
          />
          <Route 
            path="/books/:bookId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace/>
                ) : books.length === 0 ? (
                  <Col>There are no books to show.</Col>
                ) : (
                  <Col md={8}>
                    <BookView books={books} />
                  </Col>
                )}
              </>
            }
          />
          <Route 
            path="/"
            element = {
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : books.length === 0 ? (
                  <Col>There are no books to show.</Col>
                ) : (
                  <>
                    {books.map((book) => (
                      <Col className="mb-4" key={book.id} md={3}>
                        <BookCard book={book} />
                      </Col>
                    ))}
                  </>
                )}
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};
/*

  return (
      <Row className="justify-content-md-center">
        {!user ? (
          <Col md={5} style={{border: "2px solid black"}}>
            <LoginView onLoggedIn={(user) => setUser(user)} />
            or
            <SignupView />
          </Col>
        ): selectedBook ? (
          <Col md={8} style={{border: "2px solid orange"}}>
            <BookView 
              book = {selectedBook}
              onBackClick={() => setSelectedBook(null)}
            />
          </Col>
        ): books.length === 0 ? (
          <div>
            There are no books to show.
          </div>
        ): (
          <>
            {books.map((book) => (
             <Col xs={6} className="mb-4" key={book.id} md={3}>
               <BookCard
                book={book}
                onBookClick={(newSelectedBook) => {
                  setSelectedBook(newSelectedBook);
                }}
              />
             </Col>
            ))}
          </>
        )}
      </Row>
    );

*/

/* 

return (
    <BrowserRouter>
      <Row className="justify-content-md-center">
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView onLoggedIn={(user) => setUser(user)} />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/books/:bookId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : books.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col md={8}>
                    <BookView books={books} />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : books.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <>
                    {books.map((book) => (
                      <Col className="mb-4" key={book.id} md={3}>
                        <BookCard book={book} />
                      </Col>
                    ))}
                  </>
                )}
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );

*/