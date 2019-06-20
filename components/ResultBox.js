import React, { Component } from 'react'
import {StyleSheet, Text} from 'react-native'

export default class ResultBox extends Component {
    render() {
        return (
            <Text style={styles.resultbox}>
                {this.props.result}
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    resultbox:{
    flex: 1,
    textAlign: 'right',
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: '#909090',
    fontSize: 26,
    color: '#424242'
    
    }
})
