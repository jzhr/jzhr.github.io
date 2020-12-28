import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, ThemeToggle } from './styles';
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const Navbar = () => (
  <Wrapper as={Container}>
    <div className={"leftBlock"}>
      <ThemeToggler>
          {({ theme, toggleTheme }) => {
            if (theme == null) {
              return null
            }
            return (
              <label>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    toggleTheme(e.target.checked ? 'dark' : 'light')
                  }
                  checked={theme === 'dark'}
                />
                <ThemeToggle/>
              </label>
            )}
          }
        </ThemeToggler>
        <Link className={"logo"} to="/">{'{ jz }'}</Link>
      </div>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
