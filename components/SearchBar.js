import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
export default class SearchBar extends Component {
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
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        ) : null
      </Container>
    );
  }
}
