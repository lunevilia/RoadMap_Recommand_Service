import React, {useState} from "react";
import {StyleSheet, Text, ScrollView, View,TouchableOpacity,Image} from "react-native";
import {SearchBar} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

const NoticeListPage = (props,{navigation}) => {

  const userId = props.userId;

    // App.js ip 받아오기
    const [ip,setIp] = useState();
    AsyncStorage.getItem("ip").then((value) => {
      setIp(value);
    });

  const [noticeName, noticeNameModified] = useState(['자유게시판', '조언방', '토론방', '질문방'])

  return(
    <View style={styles.container}>

            {/* 사용자 정보 및 검색창 */}
            <View style = {{margin : 10}}>
            <View style = {{flexDirection : 'row', justifyContent : 'space-between'}}>
                <TouchableOpacity style = {{flexDirection : 'row', flex : 1}} onPress = {() =>{
                  props.navigation.navigate("MyPage", {userId : userId, ip : ip})
                }}>
                  <Image style = {{width : 50, height : 50, padding : 10}} source ={require("../img/user.png")}></Image>
                  <Text style = {styles.userName}>{userId}</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {{flex : 1, justifyContent : 'center', marginLeft : 10, marginRight : 10}} onPress = {() => {
                  props.navigation.navigate("SearchPage", {userId : userId, ip : ip})
                }}>
                  <SearchBar
                    lightTheme = 'true'
                    round = "true"
                    platform = "android"
                    disabled = "true"
                    leftIconContainerStyle = {{marginRight : "80%"}}
                    containerStyle = {{backgroundColor : 'white', height : 'auto', borderWidth : 1, borderRadius : 10, borderColor : 'gray'}}
                    inputContainerStyle = {{backgroundColor : 'white', height : 20}}>
                  </SearchBar>
                </TouchableOpacity>

              </View>
          </View>

        <View style={styles.top}>
        <Text style={styles.category_subtitle}>게시판 목록</Text>
            <TouchableOpacity style= {styles.button} onPress = {() =>{
            props.navigation.navigate("NoticePage", {noticeName : noticeName[0], userId : userId})
          }}>
            <Image style={styles.image} source={require('../img/1.png')} />
             <Text style={styles.category_button}>자유 게시판</Text>
            </TouchableOpacity>

            <TouchableOpacity style= {styles.button} onPress = {() =>{
            props.navigation.navigate("NoticePage", {noticeName : noticeName[1], userId : userId})
          }}>
            <Image style={styles.image} source={require('../img/2.png')} />
             <Text style={styles.category_button}>조언방</Text>
            </TouchableOpacity>

            <TouchableOpacity style= {styles.button} onPress = {() =>{
            props.navigation.navigate("NoticePage", {noticeName : noticeName[2], userId : userId})
          }}>
              <Image style={styles.image} source={require('../img/3.png')} />
             <Text style={[styles.category_button, {marginLeft: 14}]}>토론방</Text>
            </TouchableOpacity>

            <TouchableOpacity style= {styles.button} onPress = {() =>{
            props.navigation.navigate("NoticePage", {noticeName : noticeName[3], userId : userId})
          }}>
            <Image style={styles.image} source={require('../img/4.png')} />
             <Text style={styles.category_button}>질문방</Text>
            </TouchableOpacity>
            
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'column', // row
    backgroundColor: 'white',
  },
  userName : {
    fontSize : 30,
    fontWeight : 'bold',
    padding : 10
  },
  top: {
    flex: 1,
    backgroundColor: 'white',
  },

  category_title:{
    color: 'black',
    fontSize: 25,
    fontWeight: "600",
    marginTop: 30,
    textAlign: "center",
  },

  category_button:{
    textAlign: "left",
    marginTop: 30,
    fontSize: 20, 
    color: 'green',
    marginLeft: 20,
    fontWeight: "700",
  },

  category_subtitle:{
    color: 'black',
    fontSize: 20,
    marginTop: 15,
    marginLeft: 15,
  },

  button:{
    flexDirection: 'row',
    height: 65,
  },

  image:{
    marginTop: 20 ,
    marginLeft: 20,  
    width: 40, 
    height: 40,
    
  }
});

export default NoticeListPage;