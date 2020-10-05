import React, { useEffect, useState } from "react";

export const SearchBooks = ({ setPage }) => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState();
  const [googleQuery, setGoogleQuery] = useState("");

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${googleQuery}&key=AIzaSyBotwXy3y1-6O3MFLS3gef5a21mfeWhhYI`,
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((res) => {
        return setBooks(res.items);
      });
  }, [googleQuery]);
  if (!books)
    return (
      <div>
        <button onClick={() => setPage("books")}>Show Books</button>
        <button onClick={() => setPage("authors")}>Show Authors</button>
        <button onClick={() => setPage("create-book")}>Create Book</button>
        <button onClick={() => setPage("search-books")}>Search Books</button>
        <input type="text" onChange={(e) => setQuery(e.target.value)}></input>
        <button onClick={() => setGoogleQuery(query)}>Search for Books</button>
      </div>
    );

  if (books) {
    return (
      <div>
        <button onClick={() => setPage("books")}>Show Books</button>
        <button onClick={() => setPage("authors")}>Show Authors</button>
        <button onClick={() => setPage("create-book")}>Create Book</button>
        <button onClick={() => setPage("search-books")}>Search Books</button>
        <input type="text" onChange={(e) => setQuery(e.target.value)}></input>
        <button onClick={() => setGoogleQuery(query)}>Search for Books</button>
        <ul>
          {books.map((b) => (
            <li key={b.id}>{b.volumeInfo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
};