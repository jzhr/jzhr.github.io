import styled from 'styled-components';

export const AboutWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
