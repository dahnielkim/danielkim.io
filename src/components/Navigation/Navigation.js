import React, { Component } from 'react';
import { Menu, Grid, Image, Container } from 'semantic-ui-react';
import { Link } from 'gatsby';
import Popup from 'reactjs-popup';
import BurgerIcon from '../BurgerIcon';
import MobileMenu from '../MobileMenu';
import Particles from 'react-particles-js';
import './Navigation.css';

/**
 * Navigation component displays the navbar and handles its navigation
 */
export default class Navigation extends Component {
  render() {
    const { pathname } = this.props.location;

    return (
      <Container>
        <Grid container columns={1} style={{ position: 'relative', zIndex: 1000, marginBottom: '2rem' }}>
          <Grid.Row only="computer tablet">
            <Particles
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                zIndex: 0,
                opacity: 0.4,
                borderBottom: '1px solid rgb(238, 238, 238)',
              }}
              height={90}
              params={{
                particles: {
                  color: {
                    value: '#000000',
                  },
                  number: {
                    value: 50,
                  },
                  size: {
                    value: 1,
                  },
                  line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#000000',
                    opacity: 0.4,
                    width: 1,
                  },
                },
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: 'repulse',
                    },
                  },
                },
              }}
            />
            <Grid.Column>
              <Menu secondary pointing borderless stackable>
                <Menu.Item style={{ paddingLeft: 0 }}>
                  <Link to="/">
                    <Image
                      style={{ height: 45 }}
                      src="/assets/profile_pic_circular.png"
                    />
                  </Link>
                </Menu.Item>

                <Menu.Menu position="right">
                  <Link to="/">
                    <Menu.Item name="home" active={pathname === '/'} />
                  </Link>

                  <Link to="/notes">
                    <Menu.Item name="notes" active={pathname.includes(`/notes`)} />
                  </Link>

                  {/* <Link to="/hobbies">
                    <Menu.Item name="hobbies" active={pathname.includes('/hobbies')} />
                  </Link> */}

                  <Link to="/portfolio">
                    <Menu.Item name="portfolio" active={pathname === '/portfolio'} />
                  </Link>

                  <Link to="/about">
                    <Menu.Item name="about" active={pathname === '/about'} />
                  </Link>

                  <Link to="/uses">
                    <Menu.Item name="uses" active={pathname === '/uses'} />
                  </Link>
                </Menu.Menu>
              </Menu>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row only="mobile">
            <Popup
              modal
              overlayStyle={{ background: 'rgba(255,255,255,0.98' }}
              contentStyle={contentStyle}
              closeOnDocumentClick={false}
              trigger={open => <BurgerIcon open={open} />}
            >
              {close => <MobileMenu pathName={pathname} close={close} />}
            </Popup>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

const contentStyle = {
  background: 'rgba(255,255,255,0',
  width: '80%',
  border: 'none',
};
