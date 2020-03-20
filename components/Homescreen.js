import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
        fontFamily: "Roboto",
        fontSize: 42,
        textAlign: "left",
        marginTop: 25,
    },

    text: {
        fontFamily: "Roboto",
        fontSize: 12, // Todo
        textAlign: "left",
        marginTop: 30
    }
})

class Homescreen extends Component {

    render() {
        return(
            <View>
                <View style={{marginLeft: "5%",}}>
                    <Text style={styles.title}> General {"\n"} Information </Text>
                </View>
            </View>
        )
    }
}

export default Homescreen;