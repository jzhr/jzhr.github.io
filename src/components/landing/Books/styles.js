import styled from 'styled-components';

export const BooksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  p {
    color: var(--colorLite);
  }
`;

export const BookList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2rem;

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