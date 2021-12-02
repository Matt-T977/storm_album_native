import React from 'react'
import ButtonStyles from '../styles/ButtonStyle'
import { 
    Button,
 } from 'react-native-paper'


export default function ButtonNav (props)  {


    return (
        <Button 
        style={ButtonStyles.button}
        mode='contained' 
        onPress={() => console.log('pressed')}>
            {props.title}
        </Button>
    )
}
