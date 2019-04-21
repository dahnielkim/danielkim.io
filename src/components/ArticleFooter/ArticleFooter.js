import React from 'react';
import { Link } from 'gatsby';
import { Button, Grid, Segment, Image } from 'semantic-ui-react';
import './ArticleFooter.css';

export default class ArticleFooter extends React.Component {
  render() {
    return (
      <Grid class="dkim-article-footer-container">
        <Grid.Row only="computer tablet">
          <Segment padded="very" raised>
            <Grid>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Grid>
                    <Grid.Row>
                      <h2>A quick word from the author</h2>
                    </Grid.Row>

                    <Grid.Row>
                      Hey, I'm Daniel! I like to write about software development and
                      other topics that interest me. If you enjoy my content, please
                      consider supporting me by buying me a cup of coffee to keep me
                      going! If you have suggestions or would like to hear about a
                      specific topic, feel to free to message me on Twitter!
                    </Grid.Row>

                    <Grid.Row>
                      <a href="https://ko-fi.com/A0A8S20V">
                        <img
                          height="36"
                          style={{ border: 0, height: 36 }}
                          src="https://az743702.vo.msecnd.net/cdn/kofi2.png?v=0"
                          border="0"
                          alt="Buy Me a Coffee"
                        />
                      </a>

                      <a
                        href="https://twitter.com/intent/tweet?screen_name=dahnielkim&ref_src=twsrc%5Etfw"
                        class="twitter-mention-button"
                        data-show-count="false"
                      >
                        <Button
                          color="twitter"
                          style={{ height: 36, marginLeft: 10, borderRadius: 10 }}
                        >
                          Tweet to @dahnielkim
                        </Button>
                      </a>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>

                <Grid.Column width={8}>
                  <Link to="/">
                    <Image
                      floated="right"
                      style={{ height: 200 }}
                      src="/assets/profile_pic_circular.png"
                    />
                  </Link>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Grid.Row>
      </Grid>
    );
  }
}
