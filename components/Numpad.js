import React, { Component } from 'react'
import {StyleSheet, View, Text,ScrollView} from 'react-native'
import Key from './Key';

export default class NumPad extends Component {
    render() {
        return (
            <View style={styles.numpad}>
            <View style={styles.numgroup}>
                <Key symbol='1'/>
                <Key symbol='2'/>
                <Key symbol='3'/>
                <Key symbol='4'/>
            </View>
            <View style={styles.numgroup}>
                <Key symbol='5'/>
                <Key symbol='6'/>
                <Key symbol='7'/>
                <Key symbol='8'/>
            </View>
            <View style={styles.numgroup}>
                <Key symbol='9'/>
                <Key symbol='0'/>
                <Key symbol='.'/>
                <Key symbol='='/>
            </View>

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
    },
    numgroup:{
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-between',
    }

})