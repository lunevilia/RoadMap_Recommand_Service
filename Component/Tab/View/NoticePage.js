import React, {Component, useState} from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView, FlatList, Image, Button} from 'react-native';
import{Menu, MenuOption, MenuOptions,MenuTrigger, MenuProvider} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';


const NoticePage = (props, {navigation}) => {

  let noticeName = props.route.params.noticeName;
  const userId = props.route.params.userId;
  console.log(userId);
  let [bid, setBid] = useState([]);

  // App.js ip 받아오기
  const [ip,setIp] = useState();
  AsyncStorage.getItem("ip").then((value) => {
    setIp(value);
  });

  //let [bindex, setBindex] = useState(["1","1","1","1","1","1","1","1","1"]);
  let [btitle, setBtitle] = useState(["타이틀1","타이틀2","타이틀3","타이틀4","타이틀5","타이틀6","타이틀7","타이틀8"]);
  let [bdate, setBdate] = useState(["2021-02-23 14:57", "2021-02-23 14:57", "2021-02-23 14:57", "2021-02-23 14:57", "2021-02-23 14:57", "2021-02-23 14:57", "2021-02-23 14:57", "2021-02-23 14:57"]);
  let [buid, setBuid] = useState(["1","1","1","1","1","1","1","1","1"]);
  let [buser, setBUser] = useState(["익명1", "익명2", "익명3", "익명4", "익명5", "익명6", "익명7", "익명8"]);

  const renderData = ({item}) => (
    <View style={{flexDirection: "row",
    justifyContent: "center",
    margin: 15,
  }}>
    <TouchableOpacity>
      <View style={{justifyContent: "center", alignItems: "center"}}>
      <View style={{width:60}}>
        <Text style={{textAlign: "center"}}>{item.game}</Text>
        </View>
        </View>
    </TouchableOpacity>
    </View>
); //이거 없어도 됨


  const boardlist = ({index})=>( 
      <TouchableOpacity style = {styles.commentArea}>
        <View style = {styles.imageandname}>
        <Text style = {styles.buser}>{btitle[index]}</Text>
        </View>
        <Text style = {styles.btitle}>{buser[index]}</Text>
        <Text style = {styles.buid}>{bdate[index]}</Text>
      </TouchableOpacity>
    );

    return(
        // 문단 순서대로 게시판 이름, 글 작성 버튼, 검색 이미지, FlatList(게시글 목록)
      <MenuProvider>
        <SafeAreaView style ={styles.container}>
          <View style = {{flexDirection : 'row', justifyContent : 'space-between', margin : 10,}}>
          <View style = {{flex : 1, margin : 10}}>  
          <View style = {{flexDirection : 'row', justifyContent : 'space-between'}}>
            <Text style = {{fontSize : 30, fontWeight : 'bold'}} >{noticeName}</Text>
          </View> 
          </View>

          <View style = {{flexDirection : 'row', justifyContent : 'space-between', margin : 10,}}>
            <TouchableOpacity style = {styles.mindMapArea} onPress = {() =>{
              
              props.navigation.navigate("글쓰기", {userId : userId});
            }}>                
                    <Text style={{ fontSize: 20, color: '#fff' }}>작성</Text>
                    <Text style = {styles.rankName}>글 작성</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.mindMapArea} onPress = {() =>alert('글 검색')
              }>
                <Image style = {styles.userimage} source = {require('../../img/search.png')}></Image>
                </TouchableOpacity>
            </View>
          </View>

            <View style = {{margin : 10, flexDirection : 'row', flex : 1,}}>
         <FlatList 
                         data={btitle}
                         extraData={buser}
                         keyExtractor={bdata => bdata.id}
                         renderItem={boardlist} //이거 없어도 됨?
         />
         </View>
      </SafeAreaView>
      </MenuProvider>
    );
}

const styles = StyleSheet.create({
container: {
  width: '100%',
  flex: 1,
  flexDirection: 'column', // row
  backgroundColor: 'white',
},

category_subtitle:{
  color: 'black',
  fontSize: 20,
  marginTop: 15,
  marginLeft: 15,
},
commentArea : {
  backgroundColor : '#ffffff',
  shadowColor : "#000000",
  shadowOpacity : 0.3,
  shadowOffset : {width : 2, height : 2},
  elevation : 3,
},
buser : {
  fontSize : 20,
  fontWeight : 'bold',
  marginLeft : 10,
},
/*userimage : {
  height : hp('4%'),
  width : wp('9%'),
},*/
bdate : {
  marginLeft : 5,
  marginBottom : 5,
  color : 'gray'
},
btitle : {
  margin : 5,
  fontSize : 18
},
buid : {
  marginLeft : 5,
  marginBottom : 5,
  color : 'gray'
},
imageandname : {
  flexDirection : 'row',
  alignItems : 'center',
  margin : 5
},
userimage : {
  height : hp('4%'),
  width : wp('9%'),
},

});

export default NoticePage;