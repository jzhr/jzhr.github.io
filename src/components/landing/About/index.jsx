import React from 'react';
import { Container } from 'components/common';
import mindset from 'assets/illustrations/mindset.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const About = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={'/me.JPG'} width="350px" height="350px" alt="me" />
      </Thumbnail>
      <Details>
        <h2>About Me</h2>
        <p>
          I'm currently in my third year at Cornell University, pursuing a double major in Information Science and
          Statistical Science.
        </p>
        <p>Originally from Canada, I've lived briefly in California and now reside in Avon, Connecticut.</p>
        <p>
          My interests include full-stack web development, UI/UX design, and data science. In my spare time, you'll find me reading good books,
          producing music, or hanging out with friends.
        </p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
