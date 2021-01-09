import React from 'react';
import { Container } from 'components/common';
import { BooksWrapper, BookList } from './styles';
import { selfHelp, sciFi, art, bio, biz } from 'data/bookdata.js'

export const Books = () => {
  const getBooks = ([title, author], key) =>
    <li key={key}>
      <div className="title"><strong>{ title }</strong></div>
      <div className="author">{ author }</div>
    </li>;

  return (
    <BooksWrapper as={Container}>
      <BookList>
        <h1>Books</h1>
        <p>
          some books that I find intriguing, in no particular order.
        </p>

        <h2>biographies</h2>
        <ul>
          {bio.map(getBooks)}
        </ul>

        <h2>art & design</h2>
        <ul>
          {art.map(getBooks)}
        </ul>

        <h2>self-help</h2>
        <ul>
          {selfHelp.map(getBooks)}
        </ul>

        <h2>sci-fi</h2>
        <ul>
          {sciFi.map(getBooks)}
        </ul>

        <h2>business</h2>
        <ul>
          {biz.map(getBooks)}
        </ul>
      </BookList>
    </BooksWrapper>
  );
};