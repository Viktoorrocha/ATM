/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar,Image} from 'react-native';

import BarraNavegacao from './barraNavegacao';

const detalhesCliente = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');


export default class CenaCliente extends Component{
  render() {
    return (
        <View>
            <StatusBar>
                backgroundColor='#CCC'
            </StatusBar>
            <BarraNavegacao></BarraNavegacao>

           <Image source={detalhesCliente}></Image>
           <Text>Nossos Clientes</Text>
           <Image source={cliente1}></Image>
           <Text>Loren Ipsun</Text>
           <Image source={cliente2}></Image>
           <Text>Loren Ipsun</Text>
        </View>
    );
  }
}



