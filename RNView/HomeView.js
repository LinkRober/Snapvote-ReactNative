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
    TabBarIOS,
    ListView
} from 'react-native';

import SettingView from '../RNView/SettingView.js'
var { width, height } = require('Dimensions').get('window');
export default class HomeView extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
        this.state = {
            dataSource:ds.cloneWithRows(['create a rate it vote','create a left or right vote'])
        }
    }

    render() {
        return (<ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderCell}
                />)
        
      }

      renderCell = ({title,index}) => {
        return <Text>index</Text>
      }


}



