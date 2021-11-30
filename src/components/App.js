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
// import images from '../../img'


const Item = ({ title, category, summary }) => (
  <Card>
    <Card.Cover source={{uri:'https://unsplash.com/photos/fQM8cbGY6iQ?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'}} resizeMode='contain'/>
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
