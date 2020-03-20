import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from "./components/Homescreen";
import Auto from "./components/Auto";
import Tele from "./components/Teleop.js";

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

function Home({navigation}) {
    return (
      <View>
        <Homescreen />
        <View style={{ width: "90%", marginLeft: "5%", marginTop: 25}}>
          <Button title="Next" color="#B3861B" onPress={() => navigation.navigate("Step 2")} />
        </View>
      </View>
    )
}

function AutoScreen({navigation}) {
  return (
      <View>
          <Auto/>
          <View style={{ width: "90%", marginLeft: "5%", marginTop: 25}}>
              <Button title="Autonomous Period Done: Next" color="#B3861B" onPress={() => navigation.navigate("Step 3")} />
          </View>
      </View>

  )
}

function TeleopScreen({navigation}) {
    return (
        <View>
            <Tele/>
            <View style={{width: "90%", marginLeft: "5%", marginTop: 40}}>
                <Button title="Tap here when the robot proceeds to climb" color="#B3861B" onPress={() => navigation.navigate("Step 4")} />
            </View>
        </View>
    )
}

function Endgame() {
    return null;
}

function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Step 1" component={Home}/>
        <Stack.Screen name="Step 2" component={AutoScreen}/>
        <Stack.Screen name="Step 3" component={TeleopScreen}/>
        <Stack.Screen name="Step 4" component={Endgame}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;