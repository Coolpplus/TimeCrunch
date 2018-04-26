import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
export default class CustomFooter extends Component {
  render() {
    return (
      <Container>
        <Footer style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
          <FooterTab style={{backgroundColor: 'black'}}>
            <Button>
              <Icon style={{color: 'white'}}name="home" />
            </Button>
            <Button>
              <Icon style={{color: 'white'}}name="search" />
            </Button>
            <Button>
              <Icon style={{color: 'white'}}name="navigate" />
            </Button>
            <Button>
              <Icon style={{color: 'white'}}name="list" />
            </Button>
            <Button>
              <Icon style={{color: 'white'}}name="ios-more" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
