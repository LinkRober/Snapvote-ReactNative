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
    TouchableOpacity,
} from 'react-native';


class ResultItem {
    constructor(image,title,content){
        this.image = image;
        this.title = title;
        this.content = content;
    }
}

export default class ResultView extends Component {
    constructor(props){
        super(props);

        let item = new ResultItem('q1_right.png','Who am I to you','12 friends voted');
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource:ds.cloneWithRows([item,item,item,item,item]),
        };
        this.renderCell = this.renderCell.bind(this);
        this._onPressButton = this._onPressButton.bind(this);
    }


    renderCell(rowData){
        return <View style={{height:95}}>
            <View style={{flex:1,flexDirection:'row',marginLeft:10,marginRight:10,marginBottom:15,backgroundColor:'white'}}>
                <Image
                    style={{height:70,width:70,margin:5}}
                    source = {require('../img/q1_right.png')}
                />
                <View style={{flexDirection:'column',marginTop:10}}>
                    <Text style={{fontWeight:'600',fontSize:16}}>
                        {rowData.title}
                    </Text>
                    <Text style={{fontSize:14,color:'#40365B'}}>
                        {rowData.content}
                    </Text>
                </View>
                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={{marginLeft:5,marginTop:42,backgroundColor:'#4CABFE',height:28,alignContent:'center',borderRadius:20}}>
                        <Text style={{color:'white',marginTop:5,marginLeft:10,marginRight:10}}>View result</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    }

    _onPressButton(){

    }

    render(){
        return <View style={{flex:1,backgroundColor:'#f0f3f5'}}>
            <ListView
                dataSource = {this.state.dataSource}
                renderRow = {this.renderCell}
            />
        </View>
    }


}