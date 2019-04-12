import React from 'react';
import { Link } from 'gatsby';
import { Menu, Grid, Container } from 'semantic-ui-react';

const MobileMenu = ({ close, pathName }) => {
  return (
    <Container>
      <Grid>
        <Menu fluid secondary pointing vertical widths={16}>
          <Link to="/">
            <Menu.Item active={pathName === '/'} onClick={close}>
              Home
            </Menu.Item>
          </Link>

          <Link to="/notes">
            <Menu.Item active={pathName.includes('/notes')} onClick={close}>
              Notes
            </Menu.Item>
          </Link>

          <Link to="/hobbies">
            <Menu.Item active={pathName.includes('/hobbies')} onClick={close}>
              Hobbies
            </Menu.Item>
          </Link>

          <Link to="/portfolio">
            <Menu.Item active={pathName === '/portfolio'} onClick={close}>
              Portfolio
            </Menu.Item>
          </Link>

          <Link to="/about">
            <Menu.Item active={pathName === '/about'} onClick={close}>
              About
            </Menu.Item>
          </Link>

          <Link to="/uses">
            <Menu.Item active={pathName === '/uses'} onClick={close}>
              Uses
            </Menu.Item>
          </Link>
        </Menu>
      </Grid>
    </Container>
  );
};

export default MobileMenu;
