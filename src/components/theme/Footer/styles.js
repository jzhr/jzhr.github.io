import footerIllustration from 'assets/illustrations/footer.svg';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 28rem 0 2rem 0;
  background-image: url(${footerIllustration});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media (max-width: 1960px) {
    padding: 14rem 0 1.5rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 0.5rem;

    img {
      margin: 3px;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }

  img {
		opacity: 0.7;
		transition: 0.3s;
	}

	img:hover {
		opacity: 1;
	}
`;

export const Details = styled.div`
  color: hsla(0, 0%, 0%, 0.8);

  .source {
    display: block;
    color: #000000;
    text-decoration: underline;
  }

  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
`;
