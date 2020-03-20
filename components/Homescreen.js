import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

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

class Homescreen extends Component {

    render() {
        return(
            <View>
                <View style={{marginLeft: "5%"}}>
                    <Text style={styles.title}> General {"\n"} Information </Text>
                </View>
                <View style={{marginLeft: "5%"}}>
                    <Text style={styles.text}> Scouter's Name </Text>
                    <TextInput style={styles.input}></TextInput>
                    <Text style={styles.text}> Match Number # </Text>
                    <TextInput style={styles.input}></TextInput>
                    <Text style={styles.text}> Team Number # </Text>
                    <TextInput style={styles.input}></TextInput>
                    <Text style={styles.text}> Alliance Colour </Text>
                    <View style={{flexDirection: "row", marginTop: 5, marginLeft: "2%"}}>
                        <View style={{paddingRight: 25}}>
                            <Button title="Red" color="#CC1717"/>

                        </View>
                        <Button title="Blue" color="#174DCC"/>
                    </View>
                </View>
                <View style={{width: "90%", marginLeft: "5%", marginTop: 25}}>
                    <Button title="Next" color="#B3861B"/>
                </View>
            </View>
        )
    }
}

export default Homescreen;