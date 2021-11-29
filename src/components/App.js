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
  SafeAreaView,
  StyleSheet,
  // TouchableOpacity
 } from 'react-native';
import {
  Card,
  Title,
  Paragraph,
} from 'react-native-paper'
import { 
  Appbar, 
} from 'react-native-paper';
import data from '../data/data';
// import stockStorm from '../img/stockStorm'


const Item = ({ title, category, summary }) => (
  <Card>
    <Card.Cover source={{ uri: 'https://github.com/Matt-T977/storm_album_native/blob/main/src/img/stockStorm.PNG'}}
    style={{height: 200}}/>
    <Card.Content>
      <Title>{title} | Category: {category}</Title>
      <Paragraph>{summary}</Paragraph>
    </Card.Content>
  </Card>
);


export default function App () {

  const renderItem = ({ item }) => (
    <Item title={item.title} category={item.category} summary={item.summary} />
  );



    return (
      <SafeAreaView>
        <Appbar.Header>
          <Appbar.Content title="Storm Album" />
        </Appbar.Header>
        <View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </SafeAreaView>
    )};
