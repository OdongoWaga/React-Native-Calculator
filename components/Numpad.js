import React, { Component } from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default class Numpad extends Component {
    render() {
        return (
            <View style={styles.numpad}>
                <Text> Keys will show up here </Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    numpad:{
        
    }

})