import React from 'react'
import { 
    Button,
 } from 'react-native-paper'


export default function ButtonNav (props)  {


    return (
        <Button mode='contained' onPress={() => console.log('pressed')}>{props.title}</Button>
    )
}
