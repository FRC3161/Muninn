import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { SharedState } from 'react-native-shared-state';
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

})

class Homescreen extends Component {

    componentDidMount() {
        ScoutingDataState.register(this, ["name", "match_number", "match_type", "team_number", "alliance"]);
    }

    componentWillUnmount() {
        ScoutingDataState.unregister(this);
    }

    state = {name: "", match_number: 0, team_number: 0, alliance: ""};

    render() {

        let match_types = [{
            value: "QM"
        }, {
            value: "QF"
        }, {
            value: "SF"
        }, {
            value: "F"
        }];

        return(
            <View>
                <View style={{marginLeft: "5%"}}>
                    <Text style={styles.title}> Match {"\n"} Information </Text>
                </View>
                <View style={{marginLeft: "5%"}}>
                    <Text style={styles.text}> Scouter's Name </Text>
                    <TextInput style={styles.input} maxLength={50} onChangeText={(scouter_name) => ScoutingDataState.setState({name: scouter_name})}/>
                    <Text style={styles.text}> Match Number # </Text>
                    <View style={{flexDirection: "row"}}>
                        <TextInput style={styles.input} maxLength={5} keyboardType={"numeric"} onChangeText={(match_number) => ScoutingDataState.setState({match_number: match_number})}/>
                        <View style={{position: 'relative', marginTop: -30, marginLeft: "5%", minWidth: "30%", maxWidth: "30%"}}>
                            <Dropdown label={"Match Type"} itemColor={"#000000"} baseColor={"#FFFFFF"} data={match_types} onChangeText={(t) => ScoutingDataState.setState({match_type: t})}/>
                        </View>
                    </View>
                    <Text style={styles.text}> Team Number # </Text>
                    <TextInput style={styles.input} maxLength={4} keyboardType={"numeric"} onChangeText={(team_number) => ScoutingDataState.setState({team_number: team_number})}/>
                    <Text style={styles.text}> Alliance Colour </Text>
                    <View style={{flexDirection: "row", marginTop: 5, marginLeft: "2%"}}>
                        <View style={{paddingRight: 25}}>
                            <Button title="Red" color="#CC1717" onPress={() => ScoutingDataState.setState({alliance: "red"})} />

                        </View>
                        <Button title="Blue" color="#174DCC" onPress={() => ScoutingDataState.setState({alliance: "blue"})} />
                    </View>
                </View>
            </View>
        )
    }

    getName() {
        return this.state.name;
    }

    getTeam() {
        return this.state.team_number;
    }

    getMatch() {
        return this.state.match_number;
    }

    getAlliance() {
        return this.state.alliance;
    }

}

export default Homescreen;