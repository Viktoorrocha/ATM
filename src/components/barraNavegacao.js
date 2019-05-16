/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class BarraNavegacao extends Component{
  render() {
    return (
       <View style={styles.barraTitulo}>
           <Text style={styles.titulo}>ATM Consultoria</Text>
       </View>
    );
  }
}

const styles = StyleSheet.create({
    barraTitulo: {
      backgroundColor: '#CCC',
      padding: 10,
      height: 60,
      marginTop: 30
    },
    titulo: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: '#000'
    }
  });


