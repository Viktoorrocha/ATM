/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import barraNavegacao from './src/components/barraNavegacao';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import CenaCliente from './src/components/CenaCliente';

export default class App extends Component{
  render() {
    return (
      <CenaCliente></CenaCliente>
    );
  }
}


