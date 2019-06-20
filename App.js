/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ExpressionBox from './components/ExpressionBox'
import ResultBox from './components/ResultBox'
import NumPad from './components/NumPad'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state={
    expression: '',
    result:''
  }
  _assembleExpression =() => {

  }
  _calculateResult =()=> {

  }
  _rollbackExpression =()=> {

  }
  render() {
    return (
      <View style={styles.container}>
        <ExpressionBox expression ={this.state.expression} />
         <ResultBox result ={this.state.result} />
      <NumPad
          assembleExpression={this._assembleExpression}
          calculateResult={this._calculateResult}
          deletePressed={this._rollbackExpression} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
