import React, { Component } from 'react'
import {StyleSheet, Text} from 'react-native'

export default class ExpressionBox extends Component {
    render() {
        return (
            <Text style={styles.expressionbox}>
                {this.props.expression}
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    expressionbox:{
    flex: 1,
    textAlign: 'left',
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: '#909090',
    fontSize: 32,
    color: '#212121'
    
    }
})
