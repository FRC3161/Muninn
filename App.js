import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from "./components/Homescreen";
import Auto from "./components/Auto";

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

class AutoScreen extends Component {
  render() {
    return <Auto/>
  }
}

function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Step 1" component={Home}/>
        <Stack.Screen name="Step 2" component={AutoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;