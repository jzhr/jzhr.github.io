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
        and Statistics.
      </p>
      <p style={{ margin: '0px' }}>
        My interests include web development, UI/UX design, and data visualization. In my spare time, you'll find me
        reading good books
        {/* {' '}
        <Link to="/books" className="highlight-link">
          good books
        </Link> */}, trying
        out new recipes, or hanging out with friends.
      </p>
    </Details>
  </AboutWrapper>
);
