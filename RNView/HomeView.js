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
    ListView,
    Button
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
                    renderHeader = {this.listHeader}
                />)
      }

      listHeader(){
          return <View>
              <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',height:58}}>
                <View>
                    <Text style={{color:'#40365B'}}>———— snapvote mode ————</Text>
                </View>
                
            </View>
          </View>
      }

      renderCell(title,sessionID,rowID) {
        let cellHeight = (height - 64 - 48 - 58)/2;
        if(rowID == 0){
            return <View style={{flex:1,flexDirection:'column',height:cellHeight,justifyContent:'center'}}>
                <View style={{flex:1,height:cellHeight-20,backgroundColor:'red'}}>
                    <View style={{backgroundColor:'#0F7DFF',marginLeft:20,marginRight:20,marginTop:cellHeight - 58,alignItems:'center',borderRadius:10}}>
                        <Text style={{borderRadius:10,height:38,fontWeight:'bold',color:'white'}}>{title}</Text>
                    </View>
                </View>
            </View>
        }else {
            return <View style={{flex:1,height:cellHeight}}>
            <View style={{height:cellHeight-20,backgroundColor:'green'}}>
                <View>
                    <Text>{title}</Text>
                </View>
            </View>
        </View>                                    
        }
      }




}



