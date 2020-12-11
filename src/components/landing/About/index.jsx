import React from 'react';
import { Container } from 'components/common';
import mindset from 'assets/illustrations/mindset.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const About = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={mindset} width="300px" height="300px" alt="me" />
      </Thumbnail>
      <Details>
        <h2>About Me</h2>
        <p>
          I'm currently in my third year at Cornell University, pursuing a double major in Information Science and
          Statistical Science.
        </p>
        <p>Originally born in Canada 🇨🇦, I've lived briefly in California and now reside in Avon, Connecticut 🇺🇸.</p>
        <p>
          My interests include web development, UX design, and data science. In my spare time, you'll find me reading good books,
          producing music, or hanging out with friends.
        </p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
