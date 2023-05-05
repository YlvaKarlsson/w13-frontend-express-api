/* eslint-disable no-unused-vars */
// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Book } from './components/Book';
import { Button } from './components/Button';
import { Title, Wrapper } from './components/Title';
import { Input, InputContainer } from './components/Input';

function App() {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState('')
  const handleSearch = (e) => {setSearch(e.target.value)}
  const submitSearch = (e) => {
    e.preventDefault()
    setBooks([])
   let response = fetch(`https://express-api-w13-dn5qt3iqpa-ew.a.run.app/books/isbn/${search}`)
   .then(response => response.json())
   .then(data => console.log(data))
  }
  useEffect(() => {
  let response = fetch("https://express-api-w13-dn5qt3iqpa-ew.a.run.app/books")
  .then(response => response.json())
  .then(data => setBooks(data))
  })
  return (
    <><Wrapper>
      <Title>Welcome to my Api</Title>
    </Wrapper>
    <div className="App">
        <InputContainer>
          <Input
            type='text'
            placeholder='Search for ISBN-nr...'
            onChange={handleSearch} />
          <Button onClick={submitSearch}>Search now</Button>
        </InputContainer>
        {books.map((book) => {
          return (
            <Book
              book={book}
              key={book.id} />
          );
        })}
      </div></>
  );
}

export default App;
