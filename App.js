import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from "./components/Homescreen";

const Stack = createStackNavigator();
const name = "Scouting App";

const MyTheme = {
  dark: true,
  colors: {
    primary: "#B3861B",
    border: "#B3861B",
    card: "#B3861B",
    background: "#262626",
    text: "#FFFFFF"
  }
}

class Home extends Component {
  render() {
    return <Homescreen/>
  }
}

function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Step 1" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;