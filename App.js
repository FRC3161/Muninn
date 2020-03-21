import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SharedState } from 'react-native-shared-state';
import Homescreen from "./components/Homescreen";
import Auto from "./components/Auto";
import Tele from "./components/Teleop.js";
import Endgame from "./components/Endgame.js";
import QR from "./components/QR.js";

const Stack = createStackNavigator();

export const ScoutingDataState = new SharedState({
    name: "", match_number: 0, team_number: 0, alliance: "", preload: 0, highPortAuto: 0, lowPortAuto: 0, missedAuto: 0, highPortTele: 0, lowPortTele: 0,
    missedTele: 0, colourWheelDone: false, colourWheelLanded: false, colourWheelWasRotated: false, climb: "", balance: "", num_climbs: 0, notes: ""
});

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

function EndgameScreen({navigation}) {
    return (
        <View>
            <Endgame/>
            <View>
                <View style={{width: "90%", marginLeft: "5%", marginTop: 40}}>
                    <Button title="Match is done" color="#B3861B" onPress={() => navigation.navigate("Step 5")} />
                </View>
            </View>
        </View>
        )
}

function QRScreen() {
    return <QR/>;
}

function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Step 1" component={Home}/>
        <Stack.Screen name="Step 2" component={AutoScreen}/>
        <Stack.Screen name="Step 3" component={TeleopScreen}/>
        <Stack.Screen name="Step 4" component={EndgameScreen}/>
        <Stack.Screen name="Step 5" component={QRScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;