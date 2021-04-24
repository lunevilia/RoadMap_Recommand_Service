import React, {useState} from "react";
import {StyleSheet, Text, ScrollView, TouchableOpacity, View, Image} from "react-native";
import {SearchBar} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

const RoadMapCategoryPage = (props,{navigation}) => {

  const userId = props.userId;

    // App.js ip 받아오기
    const [ip,setIp] = useState();
    AsyncStorage.getItem("ip").then((value) => {
      setIp(value);
    });
  
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

        <Text>RoadMapCategoryPage</Text>
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
});

export default RoadMapCategoryPage;