import React from 'react';
import { View } from 'react-native';
import {
    Card,
    Title,
    Paragraph,
  } from 'react-native-paper'

const Item = ({ title, category, summary }) => (
    <Card>
      <Card.Cover 
      style={{width: 'auto', height: 'auto'}}
      source={{uri: '../img/stormPhoto.PNG'}} 
      resizeMode='contain'
      />
      <Card.Content>
        <Title>{title} | Category: {category}</Title>
        <Paragraph>{summary}</Paragraph>
      </Card.Content>
    </Card>
  );

export default function stormList () {


    const renderItem = ({ item }) => (
        <Item title={item.title} category={item.category} summary={item.summary} />
      );

    <View>
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
    </View>
}