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


const Item = ({ title, category, summary }) => (
  <Card>
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

    const styles = StyleSheet.create({
      // container: {
      //   flex: 1,
      //   marginTop: StatusBar.currentHeight || 0,
      // },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
    });