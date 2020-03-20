import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

class Homescreen extends Component {
    render() {
        return(
            <View style={{alignContent: "center"}}>
                <Text> Home </Text>
            </View>
        )
    }
}

export default Homescreen;