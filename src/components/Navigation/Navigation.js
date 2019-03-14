import React, { Component } from 'react';
import { Menu, Grid, Image } from 'semantic-ui-react';
import { Link } from 'gatsby';
import './Navigation.css';

export default class Navigation extends Component {
  render() {
    const { pathname } = this.props.location;

    return (
      <Grid container columns={1}>
        <Grid.Column>
          <Menu secondary pointing borderless>
            <Menu.Item>
              <Image src="/favicon.ico" />
            </Menu.Item>

            <Menu.Menu position="right">
              <Link to="/">
                <Menu.Item name="home" active={pathname === '/'} />
              </Link>

              <Link to="/blog">
                <Menu.Item name="blog" active={pathname === '/blog'} />
              </Link>

              <Link to="/portfolio">
                <Menu.Item
                  name="portfolio"
                  active={pathname === '/portfolio'}
                />
              </Link>

              <Link to="/about">
                <Menu.Item name="about" active={pathname === '/about'} />
              </Link>
            </Menu.Menu>
          </Menu>
        </Grid.Column>
      </Grid>
    );
  }
}