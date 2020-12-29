import React from 'react';
import { Container } from 'components/common';
import { AboutWrapper, Details, Thumbnail } from './styles';

export const About = () => (
    <AboutWrapper as={Container}>
      <Thumbnail>
        <img src={'/me.JPG'} alt="me" />
      </Thumbnail>
      <Details>
        <h2>About Me</h2>
        <p>
          I'm currently a third-year undergraduate at Cornell University, pursuing a double major in Information Science and
          Statistical Science.
        </p>
        <p>Originally from Canada, I've lived briefly in California and now reside in Avon, Connecticut.</p>
        <p>
          My interests include full-stack web development, UI/UX design, and data science. In my spare time, you'll find me reading good books,
          producing music, or hanging out with friends.
        </p>
      </Details>
    </AboutWrapper>
);
