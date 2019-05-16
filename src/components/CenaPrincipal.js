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

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component{
  render() {
    return (
        <View>
            <StatusBar>
                backgroundColor='#CCC'
            </StatusBar>
            <BarraNavegacao></BarraNavegacao>


            <View style = {styles.logo}>
             <Image source={logo}></Image>
            </View>
            
            <View style = {styles.menu}>
            
            <View style ={styles.menuGrupo}>
            <Image style ={styles.imgMenu} source={menuCliente}></Image>
            <Image  style ={styles.imgMenu}source={menuContato}></Image>
            </View>

            <View style={styles.menuGrupo}>
            <Image  style ={styles.imgMenu} source={menuEmpresa}></Image>
            <Image  style ={styles.imgMenu} source={menuServico}></Image>
            </View>

           
            </View>

        </View>
    );
  }
}


const styles = StyleSheet.create({

logo: {
    marginTop: 30,
    alignItems: 'center'
},
menu: {
    alignItems: 'center',
    marginTop: 30
},

menuGrupo: {
    flexDirection: 'row'
},

imgMenu: {
    margin: 15
}


});


