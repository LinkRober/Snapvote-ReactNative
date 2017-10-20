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
    Modal,
    TouchableOpacity,
    ListView,
    Switch
} from 'react-native';


import HomeView from './HomeView.js';
import ResultView from './ResultView.js';
import SettingView from '../RNView/SettingView.js';
import Icon from 'react-native-vector-icons/Ionicons';
import Foundationicon from 'react-native-vector-icons/Foundation';

class CellItem {
    constructor(title,rowID,sessionID){
        this.title = title;
        this.rowID = rowID;
        this.sessionID = sessionID;
    }
}

class SessionItem {
    constructor(title,items){
        this.title = title
        this.items = items
    }
}

export default class TabbarView extends Component{


    _getInitialState(pushValue,photoValue){
        let jsonData = [
            {
                title:'Permissions',
                items:[
                            'Push Notifications',
                            'Photos Privacy',
                ]
            },{
                title:'About us',
                items:[
                    'Snapchat',
                    'Rate Us',
                    'Privacy Policy'
                ]
            }
        ]

        var dataBlob = {},
            sectionIDs = [],
            rowIDs = [],
            icons = [];

            for (var i = 0; i<jsonData.length; i++){
                // 将组号存入 sectionIDs 中
                sectionIDs.push(i);
                // 将每组头部需要显示的内容存入 dataBlob 中
                dataBlob[i] = jsonData[i].title;
                // 取出该组所有的 icon
                icons = jsonData[i].items;
                rowIDs[i] = [];
                // 遍历所有 icon
                for (var j = 0; j<icons.length; j++){
                    // 设置标识
                    rowIDs[i].push(j);
                    // 根据标识,将数据存入 dataBlob
                    dataBlob[i + ':' + j] = icons[j];
                }
            }
            
         // 初始化getSectionData
         var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };

        // 初始化getRowData
        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };

        let ds = new ListView.DataSource({
            getSectionData : getSectionData,
            getRowData : getRowData,
            rowHasChanged : (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged : (s1, s2) => s1 !== s2
        })  
        this.state = {
            selectedTab:'HomeView',
            title:'Vote',
            settingVisible:false,
            dataSource:ds.cloneWithRowsAndSections(dataBlob,sectionIDs,rowIDs),
            pushSetting:pushValue,
            photoSetting:pushValue,
        };
    }

    _reloadData(){
        let jsonData = [
            {
                title:'Permissions',
                items:[
                            'Push Notifications',
                            'Photos Privacy',
                ]
            },{
                title:'About us',
                items:[
                    'Snapchat',
                    'Rate Us',
                    'Privacy Policy'
                ]
            }
        ]

        var dataBlob = {},
            sectionIDs = [],
            rowIDs = [],
            icons = [];

            for (var i = 0; i<jsonData.length; i++){
                // 将组号存入 sectionIDs 中
                sectionIDs.push(i);
                // 将每组头部需要显示的内容存入 dataBlob 中
                dataBlob[i] = jsonData[i].title;
                // 取出该组所有的 icon
                icons = jsonData[i].items;
                rowIDs[i] = [];
                // 遍历所有 icon
                for (var j = 0; j<icons.length; j++){
                    // 设置标识
                    rowIDs[i].push(j);
                    // 根据标识,将数据存入 dataBlob
                    dataBlob[i + ':' + j] = icons[j];
                }
            }
            
         // 初始化getSectionData
         var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };

        // 初始化getRowData
        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };

        let ds = new ListView.DataSource({
            getSectionData : getSectionData,
            getRowData : getRowData,
            rowHasChanged : (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged : (s1, s2) => s1 !== s2
        })  
        this.setState({
            dataSource:ds.cloneWithRowsAndSections(dataBlob,sectionIDs,rowIDs),
        });
    }

    constructor(props){
        super(props);
        this._selectTitle = this._selectTitle.bind(this);
        this._addNavigator = this._addNavigator.bind(this);
        this.renderCell = this.renderCell.bind(this);        
        this._tabBarLayout = this._tabBarLayout.bind(this);
        this.renderSectionHeader = this.renderSectionHeader.bind(this);
        this._getInitialState = this._getInitialState.bind(this);
        this._getInitialState(false,false);
        this._reloadData = this._reloadData.bind(this);
        
    }

    componentDidMount(){
   }

    _selectTitle(title){
        this.setState({
            title:title,
        });
    }

    _addNavigator(component,title){

        return <NavigatorIOS
        ref = 'nav'
        initialRoute = {{
            component:component,
            title:title,
            translucent:false,
            leftButtonTitle: title == 'Snapvote' ? 'Setting' : '',
            onLeftButtonPress:(() => {
                this.setState({
                    settingVisible:true
                });
            }),
            barTintColor: title == 'Snapvote' ? 'white':'#4CABFE',
            titleTextColor: title == 'Snapvote' ? 'black':'white',
            //passProps:{data},
        }}
        style={{flex:1}}
    />
    }

    _tabBarLayout(){
        return <View style={{flex:1}}>
            <TabBarIOS >
                <Icon.TabBarItem 
                    title='Vote'
                    iconName='ios-home-outline'
                    selected={this.state.selectedTab === 'HomeView'}
                    onPress={() => {
                        this.setState({
                            selectedTab:'HomeView'
                        });
                    }}
                >
                {this._addNavigator(HomeView,'Snapvote')}
                </Icon.TabBarItem>

                <Foundationicon.TabBarItem 
                    title='Result'
                    iconName='results'
                    selected={this.state.selectedTab === 'ResultView'}
                    onPress={() => {
                        this.setState({
                            selectedTab:'ResultView'
                        });
                    }}
                    
                >
                {this._addNavigator(ResultView,'Result')}
                </Foundationicon.TabBarItem >

            </TabBarIOS>

            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.settingVisible}
                onRequestClose={() => {
                    console.log('xxx');
                }}
                >
                <View style={{flex:1, backgroundColor:'#f0f3f5'}}>
                    <View style={{height:64,backgroundColor:'white',flexDirection:'row',justifyContent:'space-between'}}>
                        <TouchableOpacity onPress={() => {
                                this.setState({
                                    settingVisible:false,
                                })
                            }}>
                            <Image
                                style={{height:18,width:18,marginLeft:15,marginTop:30}}
                                source={require('../img/close.png')}
                            />
                        </TouchableOpacity>
                        <Text style={{ color:'#4E4075',marginTop:28,marginLeft:-15, fontWeight:'600',fontSize:18}}>Setting</Text>
                        <View>
                            
                        </View>
                    </View>
                    <View>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this.renderCell}
                            backgroundColor='#f0f3f5'
                            renderSectionHeader = {this.renderSectionHeader}
                            renderFooter = {this.footer}
                        />
                    </View>
                </View>
            </Modal>


        </View>
    }

    footer(){
        return <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Text style={{fontSize:12,marginTop:10}}>Snapvote#quvideo.copyright</Text>
        </View>
    }

    renderSectionHeader(sectionData,sessionID){
        return (<View style={{height:69,flexDirection:'column',justifyContent:'center',alignItems:'center',paddingTop:30}}>
                        <Text style={{color:'#40365B', fontWeight:'600'}}>{sectionData}</Text>
                </View>)
    }

    renderCell(rowData, sectionID, rowID){
        if (sectionID == 0){
            if (rowID == 0){
                return <View style={{height:66,backgroundColor:'#f0f3f5'}}>
                    <View style={{height:56,backgroundColor:'white',marginLeft:20,marginRight:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{marginLeft:10,fontWeight:'500'}}>{rowData}</Text>
                        <Switch
                            style = {{marginRight:10}}
                            value = {this.state.pushSetting}
                            onValueChange={(value) => {
                                this.setState({
                                    pushSetting:value,
                                })
                                this._reloadData()
                            }}
                        />
                    </View>
                </View>
            }
    
            if (rowID == 1){
                return <View style={{height:66,backgroundColor:'#f0f3f5'}}>
                    <View style={{height:56,backgroundColor:'white',marginLeft:20,marginRight:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{marginLeft:10,fontWeight:'500'}}>{rowData}</Text>
                        <Switch
                            style = {{marginRight:10}}
                            value = {this.state.photoSetting}
                            onValueChange={(value) => {
                                this.setState({
                                    photoSetting:value,
                                })
                                this._reloadData()
                            }}
                        />
                    </View>
                </View>
            }
        }else {
            if(rowID == 1) {
                return <View style={{height:66,backgroundColor:'#f0f3f5'}}>
                <View style={{height:56,backgroundColor:'white',marginLeft:20,marginRight:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{marginLeft:10}}>{rowData}</Text>
                        <View style={{width:150,flexDirection:'row',justifyContent:'space-between',marginRight:10}}>
                            <Image
                                style={{width:20,height:20}}
                                source={require('../img/fill_icon.png')}
                            />
                            <Image
                                style={{width:20,height:20}}
                                source={require('../img/fill_icon.png')}
                            />
                            <Image
                                style={{width:20,height:20}}
                                source={require('../img/fill_icon.png')}
                            />
                            <Image
                                style={{width:20,height:20}}
                                source={require('../img/unfill.png')}
                            />
                            <Image
                                style={{width:20,height:20}}
                                source={require('../img/unfill.png')}
                            />
                            
                        </View>
                    </View>
                </View>
            }

            return <View style={{height:66,backgroundColor:'#f0f3f5'}}>
                <View style={{height:56,backgroundColor:'white',marginLeft:20,marginRight:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{marginLeft:10}}>{rowData}</Text>
                </View>
            </View>
        }
        
    }

    render(){
        return <View style={{flex:1}}>
            {this._tabBarLayout()}
        </View>
    }

}