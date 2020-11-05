import React from 'react';
import { Wrapper, Contact } from './styles';


const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <Contact>
      <a href="mailto:jz449@cornell.edu">
        <img src="/icons/mail.svg"></img>
      </a>
      <a href="https://linkedin.com/in/jaszheng">
        <img src="/icons/linkedin.svg"></img>
      </a>
      <a href="https://github.com/jzhr">
        <img src="/icons/github.svg"></img>
      </a>
    </Contact>
  </Wrapper>
);

export default NavbarLinks;
