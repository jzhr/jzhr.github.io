import styled from 'styled-components';

export const BooksWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
`;

export const BookList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 3rem;

  ul {
    list-style-type: none;
  }

  h3 {
    font-weight: normal;
  }

  .author {
    color: var(--colorLite);
  }
`;