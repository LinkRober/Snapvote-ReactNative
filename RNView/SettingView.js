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
    Modal
} from 'react-native';

export default class SettingView extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.modalVisible}
                onRequestClose={() => {
                    console.log('xxx');
                }}
                >
                <Text>
            text
        </Text>
            </Modal>
        
    }
}