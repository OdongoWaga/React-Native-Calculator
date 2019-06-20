import React, { Component } from 'react'
import {StyleSheet, View, Text} from 'react-native'
import Key from './Key';

export default class NumPad extends Component {
    render() {
        return (
            <View style={styles.numpad}>
                <Text> Keys will show up here </Text>
                <Key symbol='1'/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    numpad:{
        flex: 2,
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 8,
        paddingBottom: 8
    }

})