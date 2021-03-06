/**
 * @format
 */
 import React from 'react';
 import {AppRegistry} from 'react-native';
 import App from './src/components/App';
 import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
 import {name as appName} from './app.json';
 

 const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#082032',
      accent: '#F0A500',
      surface: '#334756',
      background: '#000000',
      text: '#F0A500',
    },
  };


 export default function Main() {
     return(
         <PaperProvider theme={theme}>
             <App />
         </PaperProvider>
     );
 };
 
 
 
 AppRegistry.registerComponent(appName, () => Main);
 