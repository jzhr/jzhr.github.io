import styled from 'styled-components';

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 36pt;
    text-align: center;

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
    color: var(--colorLite);
    text-align: center;

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;