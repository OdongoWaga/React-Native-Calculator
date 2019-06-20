import React, { Component } from 'react'
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native'

export default class Key extends Component {

    _onPress =()=> {

    }
    render() {
        return (
            <TouchableHighlight
            style={this.props.op ? [styles.key, styles.opkey]: styles.key}
            onPress={this._onPress}>
                <View>
                    <Text style={styles.keytext}> {this.props.symbol} </Text>
                </View>
            </TouchableHighlight>

        )
    }
}

const styles = StyleSheet.create({
    key:{
        borderRadius: 30,
        backgroundColor: '#c7c7c7',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    keytext: {
        fontSize: 20
    }
   
})
