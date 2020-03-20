import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from "./components/Homescreen";

const Stack = createStackNavigator();
const name = "Scouting App";

class Home extends Component {
  render() {
    return <Homescreen/>
  }
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Step 1" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;