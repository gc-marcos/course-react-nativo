import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import params from './src/params';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines</Text>
        <Text style={styles.instructions}>
          Tamanho grade:
          {params.getRowsAmount()}x{params.getColumnsAmout}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
  },
  instructions: {
    fontSize: 24,
    textAlign: 'center',
  },
});
