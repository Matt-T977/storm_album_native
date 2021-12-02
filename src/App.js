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
import ButtonNav from './components/ButtonNav';
import data from './data/data';
import Styles from './styles/AppStyle';




export default function App () {

  



    return (
      <ScrollView>
        <View >
          <Appbar.Header>
            <Appbar.Content title="Storm Album" />
          </Appbar.Header>
          <View style={Styles.container}>
            <Title>Hello "User"</Title>
            <ButtonNav title='Storms'/>
            <ButtonNav title='Add Storm'/>
            <ButtonNav title='Season'/>
            <ButtonNav title='Career'/>
          </View>
        </View>
      </ScrollView>
    )};
