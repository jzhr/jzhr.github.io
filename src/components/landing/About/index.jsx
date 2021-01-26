import React from 'react';
import { Container } from 'components/common';
import { Link } from 'gatsby';
import mindset from 'assets/illustrations/mindset.svg';
import { AboutWrapper, Details, Thumbnail } from './styles';

export const About = () => (
  <AboutWrapper as={Container}>
    <Thumbnail>
      <img src={mindset} alt="illustration" width="380px" height="380px" />
    </Thumbnail>
    <Details>
      <h2>About Me</h2>
      <p>
        I'm currently a third-year undergraduate at Cornell University, pursuing a double major in Information Science
        and Statistical Science.
      </p>
      <p>Originally from Canada, I've lived briefly in California and now reside in Avon, Connecticut.</p>
      <p style={{ margin: '0px' }}>
        My interests include web dev, UI/UX design, and everything data. In my spare time, you'll find me reading{' '}
        <Link to="/books" className="highlight-link">
          good books
        </Link>
        , staying active, or hanging out with friends.
      </p>
    </Details>
  </AboutWrapper>
);
