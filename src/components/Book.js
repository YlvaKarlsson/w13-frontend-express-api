import React from 'react';
import styled from 'styled-components/macro';

const BookWrapper = styled.div`
background-color: black;
border: 0.3em solid red;
display: flex;
justify-content: space-around;
// display: flex;
//   flex-direction: column;
//    align-items: center;
//    margin: 0.4em;
max-width: 50em;
`;

const BookContainter = styled.div`
background-color: red;
border: 0.3em solid black;
display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.4em;
    max-width: 50%;
`;

export const Book = (props) => {
 return (
    <BookWrapper>
    <BookContainter>
        <h1>Title: {props.book.title}</h1>
        <h2>Author: {props.book.authors}</h2>
        <p>Rating: {props.book.average_rating}</p>
        <p>ISBN: {props.book.isbn}</p>
    </BookContainter>
    </BookWrapper>
 )
}