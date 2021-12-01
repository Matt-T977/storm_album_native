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
        <View style={Styles.background}>
          <Appbar.Header>
            <Appbar.Content title="Storm Album" />
          </Appbar.Header>
          <View>
            <Title style={{flex:1}}>Hello "User"</Title>
            <ButtonNav style={{flex:1}} title='Storms'/>
            <ButtonNav style={{flex:1}} title='Add Storm'/>
            <ButtonNav style={{flex:1}} title='Season'/>
            <ButtonNav style={{flex:1}}title='Career'/>
          </View>
        </View>
      </ScrollView>
    )};
