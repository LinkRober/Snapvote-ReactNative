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
} from 'react-native';

import SettingView from '../RNView/SettingView.js'

export default class HomeView extends Component {
    constructor(props){
        super(props)
        this._handleNavigationRequest = this._handleNavigationRequest.bind(this);
    }

    render() {
        return <NavigatorIOS
        
            initialRoute = {{
                component:HomeScreen,
                title:'Snapvote',
                //leftButtonIcon:require('../img/home_setting_icon.png'),
                //translucent:false,
                leftButtonTitle:'Setting',
                onLeftButtonPress:this._handleNavigationRequest,
            }}
            style={{flex:1}}
        />
      }

      _handleNavigationRequest(){
        this.refs.nav.push({
            title:'Setting',
            component:SettingView,
        });
      }
}

class HomeScreen extends Component {
    constructor(props){
        super(props)
    }
    _onForward = () => {
        this.props.navigator.push({
          title: 'Scene ' + nextIndex,
        });
      }
    
      render() {
        return (
          <View style={{flex:1,flexDirection:'column',backgroundColor:'#40365B'}}>
            <Text style={{marginTop:100}}>dddddddd</Text>
          </View>
        )
      }
}

