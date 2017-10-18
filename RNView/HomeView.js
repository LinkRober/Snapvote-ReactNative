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
    Button,
    TouchableOpacity,
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
                    backgroundColor='#f0f3f5'
                />)
      }

      listHeader(){
          return <View>
              <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',height:40,backgroundColor:'#f0f3f5'}}>
                <View>
                    <Text style={{color:'#40365B',opacity:0.6,marginTop:8}}>———— snapvote mode ————</Text>
                </View>
                
            </View>
          </View>
      }

      renderCell(title,sessionID,rowID) {
        let cellHeight = (height - 64 - 48 - 58)/2;
        if(rowID == 0){
            return <View style={{flex:1,flexDirection:'column',height:cellHeight,justifyContent:'center',backgroundColor:'#f0f3f5'}}>
                <View style={{height:cellHeight-20,backgroundColor:'white',marginLeft:28,marginRight:28,borderRadius:12}}>

                        <View style={{alignItems:'center'}}>
                            <Image
                                style={{width:122,height:92,marginTop:20}}
                                source={require('../img/rate_me_icon.png')}
                            />
                        </View>
                        

                        <View style={{backgroundColor:'#0F7DFF',marginLeft:28,marginRight:28,marginTop:20,height:35,justifyContent:'center',alignItems:'center',borderRadius:19}}>
                        <TouchableOpacity onPress={() => {
                        //
                        }}>
                            <Text style={{color:'white',fontSize:17}} >{title}</Text>
                            </TouchableOpacity>

                        </View>
                </View>
            </View>
        }else {
            return <View style={{flex:1,flexDirection:'column',height:cellHeight,justifyContent:'center',backgroundColor:'#f0f3f5'}}>
                <View style={{height:cellHeight-20,backgroundColor:'white',marginLeft:28,marginRight:28,borderRadius:12}}>

                        <View style={{alignItems:'center'}}>
                            <Image
                                style={{width:122,height:92,marginTop:20}}
                                source={require('../img/left_or_right_icon.png')}
                            />
                        </View>
                        

                        <View style={{backgroundColor:'#8B48FF',marginLeft:28,marginRight:28,marginTop:20,height:35,justifyContent:'center',alignItems:'center',borderRadius:19}}>
                        <TouchableOpacity onPress={() => {
                        //
                        }}>
                            <Text style={{color:'white',fontSize:17}} >{title}</Text>
                            </TouchableOpacity>

                        </View>
                </View>
            </View>                                
        }
      }
}



