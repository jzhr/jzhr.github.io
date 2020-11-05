import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
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
        <p>I'm currently in my third year at Cornell University, pursuing a double major in Information Science and Statistical Science.</p>
        <p>My interests include software engineering, data science, and web development. In my spare time, you'll find me reading good books, producing music, or hanging out with friends.</p>
        <p>Actively seeking internship opportunities for Summer 2021 :)</p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
