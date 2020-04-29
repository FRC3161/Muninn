import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
//import Toast from 'react-native-simple-toast';
import { SharedState } from 'react-native-shared-state';
import Homescreen from "./components/Homescreen";
import Auto from "./components/Auto";
import Tele from "./components/Teleop.js";
import Endgame from "./components/Endgame.js";
import QR from "./components/QR.js";

const Stack = createStackNavigator();

export const ScoutingDataState = new SharedState({
    name: "", match_number: 0, match_type: "", team_number: 0, alliance: "", preload: 0, highPortAuto: 0, lowPortAuto: 0, missedAuto: 0, highPortTele: 0, lowPortTele: 0,
    missedTele: 0, attitude: "", colourWheelDone: false, colourWheelLanded: false, colourWheelWasRotated: false, climb: "", balance: "", num_climbs: 0, notes: ""
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
          <Button title="Next" color="#B3861B" onPress={() => {
              if(ScoutingDataState.state.name !== "" && ScoutingDataState.state.match_number !== 0 && ScoutingDataState.state.team_number !== 0 && ScoutingDataState.state.alliance !== "") {
                  navigation.navigate("Step 2")
              } else {
                  //Toast.show("Make Sure You Fill Out All Fields!", Toast.LONG);
                  Alert.alert("Empty Fields", "Make Sure You Fill Out All Fields!");
              }
          }} />
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
                <Button title="Tap here when the robot proceeds to climb" color="#B3861B" onPress={() => {
                    if(ScoutingDataState.state.attitude !== "") {
                        navigation.navigate("Step 4")
                    } else {
                        //Toast.show("Make sure you select a Robot Attitude!", Toast.LONG);
                        Alert.alert("Empty Fields", "Make sure you select a Robot Attitude!");
                    }
                }} />
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
                    <Button title="Match is done" color="#B3861B" onPress={() => {
                        if(ScoutingDataState.state.climb !== "" && ScoutingDataState.state.balance !== "") {
                            navigation.navigate("Step 5")
                        } else {
                            //Toast.show("Make sure you fill out if the robot has climbed and if it's balanced!", Toast.LONG);
                            Alert.alert("Empty Fields", "Make sure you fill out if the robot has climbed and if it's balanced!");
                        }
                    }} />
                </View>
            </View>
        </View>
        )
}

function QRScreen({navigation}) {
    return (
        <View style={{flex: 1}}>
            <QR/>
            <View style={{width: "90%", marginLeft: "5%", marginTop: 40, marginBottom: 40}}>
                <Button title="Next Match" color="#B3861B" onPress={() => navigation.reset({index: 0, routes:[{ name: 'Step 1' }]})} />
            </View>
        </View>
    )
}

class App extends Component {

    state = { fontsLoaded: false };

    async componentDidMount() {
        await Font.loadAsync({
            "Rajdhani-Medium": require("./assets/fonts/Rajdhani-Medium.ttf"),
            "Rajdhani-Bold": require("./assets/fonts/Rajdhani-Bold.ttf")
        });

        this.setState({fontsLoaded: true})
    }

    render() {

        const { fontsLoaded } = this.state;
        if(fontsLoaded) {
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
        } else {
            return null;
        }
    }
}

export default App;