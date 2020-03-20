import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import Slider from '@react-native-community/slider';

const styles = StyleSheet.create({
    title: {
        fontFamily: "Roboto",
        fontSize: 42,
        textAlign: "left",
        marginTop: 25,
        color: "#FFFFFF"
    },

    text: {
        fontFamily: "Roboto",
        fontSize: 24, // Todo
        textAlign: "left",
        marginTop: 30,
        color: "#FFFFFF"
    },

    input: {
        height: 25,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        width: "60%",
        marginTop: 5,
        borderBottomColor: '#B3861B',
        borderWidth: 3,
        color: "#FFFFFF"
    },

})

class Auto extends Component {
    render() {
        return(
            <View style={{marginLeft: "5%"}}>
                <Text style={styles.title}> Autonomous {"\n"} Period </Text>
            </View>
        )
    }
}

export default Auto;