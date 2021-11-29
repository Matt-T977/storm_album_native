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
 } from 'react-native';
import { 
  Appbar, 
} from 'react-native-paper';





export default function App () {


  // render() {
    return (
      <ScrollView>
        <Appbar.Header>
          <Appbar.Content title="Storm Album" />
        </Appbar.Header>
        <View>
          <Text>Hello World</Text>
        </View>
      </ScrollView>
    )};
