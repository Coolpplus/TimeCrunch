import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomHeader from './components/Header';
import CustomFooter from './components/Footer';

export default class App extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: 'black', height: '100%'}}>
        <CustomHeader />
        <CustomFooter />
      </View>
    );
  }
}
