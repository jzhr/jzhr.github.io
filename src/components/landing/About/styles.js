import styled from 'styled-components';

export const AboutWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    margin-bottom: 0px;
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #212121;
  }

  p {
    font-size: 16pt;
    font-weight: normal;
    line-height: 1.3;
    color: var(--colorLite);
  }

  .highlight-link {
    padding: 0 2px 2px 2px;
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
    text-decoration: none;
    box-shadow: inset 0 -1px 0 #007fff;
  }

  .highlight-link:hover {
    box-shadow: inset 0 -55px 0 0 #007fff;
    color: white;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  text-align: center;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    border-radius: 3px;
  }
`;
