import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Font } from 'expo';

export default class CustomHeader extends Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
   await Expo.Font.loadAsync({
    'Roboto': require('../node_modules/native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('../node_modules/native-base/Fonts/Roboto_medium.ttf')
   });
   //Setting the state to true when font is loaded.
   this.setState({ fontLoaded: true });
 }
  render() {
    return (
      <Container>
      {this.state.fontLoaded ? (
        <Header style={{backgroundColor: 'black', marginTop: 20}}>
          <Left style={{flex:1}}>
            <Button transparent>
              <Icon name='ios-star' />
            </Button>
          </Left>
          <Body style={{flex:1, alignItems:'center'}}>
            <Title>Home</Title>
          </Body>
          <Right style={{flex:1}}>
            <Button transparent>
              <Icon name='person' />
            </Button>
          </Right>
        </Header>
      ) : null
    }
      </Container>
    );
  }
}
