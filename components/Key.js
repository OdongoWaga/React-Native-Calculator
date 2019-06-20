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
                    <Text> {this.props.symbol} </Text>
                </View>
            </TouchableHighlight>

        )
    }
}

const styles = StyleSheet.create({
   
})
