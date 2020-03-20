import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native'
import NumericInput from 'react-native-numeric-input';
import { Dropdown } from 'react-native-material-dropdown';
import CheckBox from 'react-native-check-box';

const styles = StyleSheet.create({
    title: {
        fontFamily: "Roboto",
        fontSize: 30,
        textAlign: "left",
        marginTop: 25,
        color: "#FFFFFF"
    },

    text: {
        fontFamily: "Roboto",
        fontSize: 22, // Todo
        textAlign: "left",
        marginTop: 30,
        color: "#FFFFFF"
    },

    slidertext: {
        fontFamily: "Roboto",
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

class Teleop extends Component {

    state = {highScored: 0, lowScored: 0, missed: 0, colourWheelDone: false, landed: false, wasRotated: false};

    render() {
        //var attitudes = ["Defensive", "Scoring Goals", "Offensive Scoring", "Failed to Perform"];
        let attitudes = [{
            value: "Defensive",
        }, {
            value: "Scoring Goals",
        }, {
            value: "Offensive Scoring",
        }, {
            value: "Failed to Perform"
        }];
        return (
            <View>
                <View style={{marginLeft: "5%"}}>
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.title}> Teleoperated {"\n"} Period </Text>
                        <View style={{paddingLeft: "5%"}}>
                            <Text style={styles.text}> Robot Attitude </Text>
                            <View style={{maxWidth: "100%", marginLeft: "5%"}}>
                                <Dropdown label={"Robot Attitude"} itemColor={"#000000"} baseColor={"#FFFFFF"} data={attitudes} />
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.title}> Power Cells </Text>
                        <View style={{flexDirection: "row", marginBottom: 5}}>
                            <Text style={styles.text}> High Port Scored </Text>
                            <View style={{marginLeft: "6%"}}>
                                <Text style={styles.text}> Low Port Scored </Text>
                            </View>
                        </View>
                        <View style={{flexDirection: "row", marginTop: 5, marginLeft: "6%"}}>
                            <NumericInput leftButtonBackgroundColor={"#B3861B"} rightButtonBackgroundColor={"#B3861B"} borderColor={"#B3861B"} textColor={'white'} editable={false} rounded={true} minValue={0} onChange={(high) => this.setState({highScored: high})}/>
                            <View style={{marginLeft: "20%"}}>
                                <NumericInput leftButtonBackgroundColor={"#B3861B"} rightButtonBackgroundColor={"#B3861B"} borderColor={"#B3861B"} textColor={'white'} editable={false} rounded={true} minValue={0} onChange={(low) => this.setState({lowScored: low})}/>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.text}> Missed (Both) </Text>
                            <View style={{paddingTop: 5, marginLeft: "5%"}}>
                                <NumericInput leftButtonBackgroundColor={"#B3861B"} rightButtonBackgroundColor={"#B3861B"} borderColor={"#B3861B"} textColor={'white'} editable={false} rounded={true} minValue={0} onChange={(missed) => this.setState({missed: missed})}/>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.title}> Colour Wheel </Text>
                            <View style={{flexDirection: "row"}}>
                                <CheckBox
                                    style={{flex: 3, padding: 10}}
                                    leftTextStyle={{color: "white"}}
                                    onClick={() => {
                                        this.setState({
                                            colourWheelDone:!this.state.colourWheelDone
                                        })
                                    }}
                                    isChecked={this.state.colourWheelDone}
                                    leftText={"Colour Wheel Done"}
                                    checkBoxColor={"#B3861B"}
                                />
                                <CheckBox
                                    style={{flex: 3, padding: 10}}
                                    leftTextStyle={{color: "white"}}
                                    onClick={() => {
                                        this.setState({
                                            landed:!this.state.landed
                                        })
                                    }}
                                    isChecked={this.state.landed}
                                    leftText={"Landed on Colour"}
                                    checkBoxColor={"#B3861B"}
                                    />
                            </View>
                            <CheckBox
                                style={{flex: 3, padding: 10}}
                                leftTextStyle={{color: "white"}}
                                onClick={() => {
                                    this.setState({
                                        wasRotated:!this.state.wasRotated
                                    })
                                }}
                                isChecked={this.state.wasRotated}
                                leftText={"Was Rotated \n 3-5 Times"}
                                checkBoxColor={"#B3861B"}
                                />
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}

export default Teleop;