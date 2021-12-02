/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { 
  ScrollView, 
  View,
  Text,
  FlatList,
  Image,
  // TouchableOpacity
 } from 'react-native';
import {
  Appbar, Button, Title,
} from 'react-native-paper'
import ButtonNav from './ButtonNav';
import data from '../data/data';
import Styles from '../styles/AppStyle';




export default function App () {

  



    return (
      <View style={Styles.container}>
        <ScrollView>
            <Appbar.Header>
              <Appbar.Content title="Storm Album" />
            </Appbar.Header>
            <View>
              <Image style={Styles.image}source={require('./img/stormPhoto.png')}/>
              <ButtonNav title='Storms'/>
              <ButtonNav title='Season'/>
              <ButtonNav title='Career'/>
            </View>
        </ScrollView>
      </View>
    )};
