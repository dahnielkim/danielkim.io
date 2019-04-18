import React, { Component, Fragment } from 'react';
import { Header, Grid, List } from 'semantic-ui-react';
import Img from 'gatsby-image';

class UsesContent extends Component {
  render() {
    return (
      <Fragment>
        <Header
          as="h3"
          style={{ letterSpacing: 10, color: 'rgba(0, 0, 0, 0.4)', marginBottom: 0 }}
        >
          DEVELOPMENT GEAR
        </Header>

        <Img
          style={{ width: '100%', marginTop: '1rem', marginBottom: '1rem' }}
          sizes={this.props.workstationPicSrc.childImageSharp.sizes}
        />

        <Grid.Row>
          <List>
            <List.Item>
              <List.Icon name="right triangle" />
              <List.Content>
                <List.Header as="a" href="https://code.visualstudio.com/">
                  Visual Studio Code
                </List.Header>
                <List.Description>
                  My main editor. I've used a lot of different editors in the past like
                  Sublime, and Atom. However, the number of extensions and debug tools VS
                  Code provides propels it to be the winner for me.
                </List.Description>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name="right triangle" />
              <List.Content>
                <List.Header>MacBook Pro 2018</List.Header>
                <List.Description>My main machine</List.Description>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name="right triangle" />
              <List.Content>
                <List.Header as="a" href="https://ohmyz.sh/">
                  Oh My Zsh
                </List.Header>
                <List.Description>
                  The Zshell framework I use to make my terminal a happy place.
                </List.Description>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name="right triangle" />
              <List.Content>
                <List.Header as="a" href="https://www.alfredapp.com/">
                  Alfred
                </List.Header>
                <List.Description>
                  With the power of workflows, Alfred makes my life easy. I also use it as
                  a replacement for the Mac Spotlight.
                </List.Description>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name="right triangle" />
              <List.Content>
                <List.Header as="a" href="https://www.sketch.com/">
                  Sketch
                </List.Header>
                <List.Description>
                  I do a lot of my design mockup work on Sketch.
                </List.Description>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name="right triangle" />
              <List.Content>
                <List.Header
                  as="a"
                  href="https://www.amazon.com/gp/product/B074JKT894/ref=oh_aui_search_asin_title?ie=UTF8&psc=1"
                >
                  LG 34UC80-B 34-in Curved UltraWide Monitor
                </List.Header>
                <List.Description>
                  With 4k resolution IPS - LED, this monitor satisfies pretty much all of
                  my requirements for a desktop monitor. I highly recommend it.
                </List.Description>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name="right triangle" />
              <List.Content>
                <List.Header
                  as="a"
                  href="https://www.amazon.com/gp/product/B01LZTBKBG/ref=oh_aui_search_asin_title?ie=UTF8&psc=1"
                >
                  Logitech K780 Multi-Device Wireless Keyboard
                </List.Header>
                <List.Description>
                  I have a lot of bluetooth devices, including my MacBook and iPad Pro,
                  and this keyboard has a nifty feature where you can utilize one keyboard
                  to toggle between various devices. The keyboard feel is kind of stiff,
                  in my opinion, but I feel like the multi-device functionality outweighs
                  any con.
                </List.Description>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name="right triangle" />
              <List.Content>
                <List.Header
                  as="a"
                  href="https://www.amazon.com/gp/product/B071YZJ1G1/ref=oh_aui_search_asin_title?ie=UTF8&psc=1"
                >
                  Logitech MX Master 2S Wireless Mouse
                </List.Header>
                <List.Description>
                  This mouse has a similar functionality as my wireless keyboard where it
                  can connect and toggle between multiple devices. As you can see, I'm all
                  about the devices that can handle multiple devices.
                </List.Description>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name="right triangle" />
              <List.Content>
                <List.Header
                  as="a"
                  href="https://www.amazon.com/gp/product/B01MZ2ATGK/ref=oh_aui_search_asin_title?ie=UTF8&psc=1"
                >
                  Elgato Thunderbolt 3 Dock
                </List.Header>
                <List.Description>
                  I have a lot of devices connecting to my MacBook and it's important to
                  me that I don't manually connect each device to my computer (Too many
                  moving parts = more room for device failures). As a result, I use an
                  Elgato docking station that centralizes all of my devices and I couldn't
                  be happier.
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Grid.Row>
      </Fragment>
    );
  }
}

export default UsesContent;
