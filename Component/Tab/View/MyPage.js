import React, {Component, useState} from 'react';
import {View, Text,ScrollView, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView, FlatList, Image, Button} from 'react-native';

const MyPage = (props) => {

    let userId = props.route.params.userId;
    let [userEmail, userEmailModified] = useState(["0410garam@naver.com"]);
    return(
      <SafeAreaView style ={styles.container}>
        <View style = {styles.block}>
          <Image source = {require("../../../assets/favicon.png")}></Image>
          <Text style = {styles.id}>
            {userId}
          </Text>
          <Text style = {{fontSize : 20, fontWeight : 'bold', color : 'gray'}}>
            이메일 : {userEmail}
          </Text>
        </View>

        <View style = {styles.block}>
          <TouchableOpacity>
            <Text style = {styles.smalltxt}>북마크</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style = {styles.smalltxt}>내 로드맵</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style = {styles.smalltxt}>설정</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style = {{fontSize : 20, fontWeight : 'bold', color : 'skyblue', padding : 20}}>회원탈퇴</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {{borderRadius : 20, backgroundColor : 'skyblue'}}>
            <Text style = {{fontSize : 20, fontWeight : 'bold', color : 'white', padding : 20}}>회원정보 수정</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: { 
    width: '100%',
    flex: 1,
    flexDirection: 'column', // row
    backgroundColor: 'white',
  },
  block : {
    padding : 20,
    marginTop : 20,
    alignItems : 'center'
  },
  profile : {
    width : 25,
    height : 25,
    alignContent : 'center'
  },
  id : {
    fontSize : 40,
    fontWeight : 'bold',
    padding : 20
  },
  smalltxt : {
    fontSize : 20,
    fontWeight : 'bold',
    color : 'darkgray',
    padding : 20
  }
  });

export default MyPage;