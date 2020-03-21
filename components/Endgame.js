import React, {Component} from 'react';
import { Text, View, StyleSheet, Slider, TextInput } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';
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
    },

    slidertext: {
        fontFamily: "Rajdhani-Medium",
        fontSize: 18, // Todo
        textAlign: "left",
        marginTop: 6,
        color: "#FFFFFF"
    },
})

class Endgame extends Component {

    componentDidMount() {
        ScoutingDataState.register(this, ["climb", "balance", "num_climbs", "notes"]);
    }

    componentWillUnmount() {
        ScoutingDataState.unregister(this);
    }

    render() {

        let climbs = [{
            value: "Yes",
        }, {
            value: "No",
        }, {
            value: "Attempted",
        }];

        let balances = [{
            value: "Yes",
        }, {
            value: "No",
        }];

        return(
            <View>
                <View style={{marginLeft: "5%"}}>
                    <Text style={styles.title}> Endgame {"\n"} Period </Text>
                    <View>
                        <Text style={styles.text}> Climbed? </Text>
                        <View style={{flexDirection: "row"}}>
                            <View style={{minWidth: "40%", maxWidth: "40%"}}>
                                <Dropdown label={"Climb"} itemColor={"#000000"} baseColor={"#FFFFFF"} data={climbs} onChangeText={(c) => ScoutingDataState.setState({climb: c})} />
                            </View>
                            <View style={{marginLeft: 30}}>
                                <Text style={styles.text}> Robots Climbed </Text>
                            </View>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <Text style={styles.text}> Balanced? </Text>
                            <View style={{marginTop: 20, marginLeft: "14%", flexDirection: "row"}}>
                                <Text style={styles.slidertext}>{ScoutingDataState.state.num_climbs}</Text>
                                <Slider style={styles.slider} minimumValue={0} maximumValue={3} step={1} minimumTrackTintColor='#B3861B' maximumTrackTintColor='#B3861B' onValueChange={(n) => ScoutingDataState.setState({num_climbs: n})} thumbTintColor='#B3861B' />
                            </View>
                        </View>
                        <View style={{minWidth: "40%", maxWidth: "40%"}}>
                                <Dropdown label={"Balance"} itemColor={"#000000"} baseColor={"#FFFFFF"} data={balances} onChangeText={(b) => ScoutingDataState.setState({balance: b})} />
                        </View>
                        <View>
                            <Text style={styles.text}>Match Notes </Text>
                            <View>
                                <TextInput style={styles.input} maxLength={255} onChangeText={(text) => ScoutingDataState.setState({notes: text})} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}

export default Endgame;