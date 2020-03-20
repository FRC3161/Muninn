import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native'
import NumericInput from 'react-native-numeric-input';
import { Slider } from 'react-native';

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

class Auto extends Component {

    state = {preload: 0, highPort: 0, lowPort: 0, missed: 0};

    render() {
        return(
            <View style={{marginLeft: "5%"}}>
                <Text style={styles.title}> Autonomous {"\n"} Period </Text>
                <View>
                    <Text style={styles.text}>Preloaded Cells</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Slider style={styles.slider} minimumValue={0} maximumValue={3} step={1} minimumTrackTintColor='#B3861B' maximumTrackTintColor='#B3861B' onValueChange={(preload_number) => this.setState({preload: preload_number})} thumbTintColor='#B3861B' />
                        <Text style={styles.slidertext}>{this.state.preload}</Text>
                    </View>
                    <View style={{flexDirection: "row", paddingBottom: 5}}>
                        <Text style={styles.text}> High Port Scored </Text>
                        <Text style={styles.text}> Low Port Scored </Text>
                    </View>
                    <View style={{flexDirection: "row", marginLeft: "9%"}}>
                        <NumericInput leftButtonBackgroundColor={"#B3861B"} rightButtonBackgroundColor={"#B3861B"} borderColor={"#B3861B"} textColor={'white'} editable={false} rounded={true} minValue={0} onChange={(high) => this.setState({highPort: high})}/>
                        <View style={{paddingLeft: 60}}>
                            <NumericInput leftButtonBackgroundColor={"#B3861B"} rightButtonBackgroundColor={"#B3861B"} borderColor={"#B3861B"} textColor={'white'} editable={false} rounded={true} minValue={0} onChange={(low) => this.setState({lowPort: low})}/>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.text}> Missed (Both) </Text>
                        <View style={{marginTop: 5, paddingLeft: "9%"}}>
                            <NumericInput leftButtonBackgroundColor={"#B3861B"} rightButtonBackgroundColor={"#B3861B"} borderColor={"#B3861B"} textColor={'white'} editable={false} rounded={true} minValue={0} onChange={(missed) => this.setState({missed: missed})}/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default Auto;