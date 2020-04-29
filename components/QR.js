import React, { Component } from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
// Definitely going to need to refactor this at some point lmao
import {ScoutingDataState} from "../App";

const styles = StyleSheet.create({
    title: {
        fontFamily: "Rajdhani-Bold",
        fontSize: 42,
        textAlign: "left",
        marginTop: 25,
        color: "#FFFFFF"
    },

    text: {
        fontFamily: "Rajdhani-Medium",
        fontSize: 24, // Todo
        textAlign: "left",
        marginTop: 30,
        color: "#FFFFFF"
    },

    slidertext: {
        fontFamily: "Rajdhani-Medium",
        fontSize: 18, // Todo
        textAlign: "left",
        marginTop: 6,
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

    slider: {
        width: 200,
        height: 40
    }

})

class QR extends Component {

    componentDidMount() {
        ScoutingDataState.register(this, [
            "name", "match_number", "match_type", "team_number", "alliance", "preload", "highPortAuto",
            "lowPortAuto", "missedAuto", "highPortTele", "lowPortTele",
            "missedTele", "attitude", "colourWheelDone", "colourWheelLanded", "colourWheelWasRotated",
            "climb", "balance", "num_climbs", "notes"]);
    }

    componentWillUnmount() {
        ScoutingDataState.reset();
        ScoutingDataState.unregister(this);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.title}> Match is Done! </Text>
                    <Text style={styles.text}> Please present device to lead scout </Text>
                </View>
                <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
                    <QRCode style={{flex: 1}} size={300} value={`${ScoutingDataState.state.name}, ${ScoutingDataState.state.match_number}, ${ScoutingDataState.state.match_type} ${ScoutingDataState.state.team_number}, ${ScoutingDataState.state.alliance}, ${ScoutingDataState.state.preload}, ${ScoutingDataState.state.highPortAuto}, ${ScoutingDataState.state.lowPortAuto}, ${ScoutingDataState.state.missedAuto}, ${ScoutingDataState.state.highPortTele}, ${ScoutingDataState.state.lowPortTele}, ${ScoutingDataState.state.missedTele}, ${ScoutingDataState.state.attitude}, ${ScoutingDataState.state.colourWheelDone}, ${ScoutingDataState.state.colourWheelLanded}, ${ScoutingDataState.state.colourWheelWasRotated}, ${ScoutingDataState.state.climb}, ${ScoutingDataState.state.balance}, ${ScoutingDataState.state.num_climbs}, ${ScoutingDataState.state.notes}`}/>
                </View>
            </View>
        )
    }
}

export default QR;
