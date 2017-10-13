'use strict';
import React, { 
    Component
  } from 'react';
  
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    TouchableHighlight,
    Image,
    TabBarIOS
} from 'react-native';

export default class ResultView extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return <View style={{flex:1,backgroundColor:'green'}}>
        </View>
    }
}