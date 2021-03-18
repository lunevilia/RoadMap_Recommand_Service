import React, {Component, useState} from 'react';
import {StackActions} from "@react-navigation/native";
import {Modal,View, Text,ScrollView, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView, FlatList, Image, Button} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const MyPage = (props, {navigation}) => {

    let userId = props.route.params.userId;
    let ip = props.route.params.ip;
    
    const [userEmail, setUserEmail] = useState([""]);
    const [modalVisible, setModalVisible] = useState(false);
    const [head, setHead] = useState([""]);
    const [body, setBody] = useState([""]);

    async function checkout(){
      try{
        const response = await axios.get("http://"+ip+":8080/checkout",{
          params : {
            userId : userId,
          }
        });
  
      }catch(error) {
        console.error(error);
      }
    }

    (async function getEmail(){
      try{
        const response = await axios.get("http://"+ip+":8080/getemail",{
          params : {
            userId : userId,
          }
        });
        
        let result = response.data
        
        if (result != "") {
          setUserEmail(result);
        }
  
      }catch(error) {
        console.error(error);
      }
    })()

    const modalHeader=(
      <View style={styles.modalHeader}>
        <Text style={styles.title}>{head}</Text>
        <View style={styles.divider}></View>
      </View>
    )
    const modalBody=(
      <View style={styles.modalBody}>
        <Text style={styles.bodyText}>{body}</Text>
      </View>
    )
    const modalFooter=(
      <View style={styles.modalFooter}>
        <View style={styles.divider}></View>
        <View style={{flexDirection:"row-reverse",margin:10}}>
          <TouchableOpacity style={{...styles.actions,backgroundColor:"#db2828"}} 
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.actionText}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.actions,backgroundColor:"#21ba45"}}
            onPress = {() => {
              if(head == "회원탈퇴"){
                checkout();
                props.navigation.dispatch(
                  StackActions.replace('login'));
                  AsyncStorage.setItem("autoLogin", "false");
              }
              else if (head == "로그아웃"){
                props.navigation.dispatch(
                  StackActions.replace('login'));
                  AsyncStorage.setItem("autoLogin", "false");
              }
            }}>
            <Text style={styles.actionText}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
    const modalContainer = (
      <View style = {styles.modalContainer}>
        {modalHeader}
        {modalBody}
        {modalFooter}
      </View>
    )

    const modal = (
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.modal}>
          <View>
            {modalContainer}
          </View>
        </View>
      </Modal>
  )
    
    return(
      <SafeAreaView style ={styles.container}>
        {modal}
        <View style = {styles.block_1}>
          <Image source = {require("../../../assets/favicon.png")}></Image>
          <Text style = {styles.id}>
            {userId}
          </Text>
          <Text style = {{fontSize : 20, fontWeight : 'bold', color : 'gray'}}>
            이메일 : {userEmail}
          </Text>
        </View>

        <View style = {styles.block_2}>
          <TouchableOpacity>
            <Text style = {styles.smalltxt}>내 로드맵</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style = {styles.smalltxt}>설정</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() =>{
            setModalVisible(true);
            setHead("로그아웃");
            setBody("로그아웃 하시겠습니까?")
          }}>
            <Text style = {styles.smalltxt}>로그아웃</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress = {() => {
              setModalVisible(true);
              setHead("회원탈퇴");
              setBody("회원탈퇴 하시겠습니까?")
            }}>
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
  block_1 : {
    padding : 20,
    marginTop : 20,
    alignItems : 'center'
  },
  block_2 : {
    padding : 20,
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
  },
  modal:{
    backgroundColor:"#00000099",
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer:{
    backgroundColor:"#f9fafb",
    width:"80%",
    borderRadius:5
  },
  modalHeader:{
    
  },
  title:{
    fontWeight:"bold",
    fontSize:20,
    padding:15,
    color:"#000"
  },
  divider:{
    width:"100%",
    height:1,
    backgroundColor:"lightgray"
  },
  modalBody:{
    backgroundColor:"#fff",
    paddingVertical:20,
    paddingHorizontal:10
  },
  modalFooter:{
  },
  actions:{
    borderRadius:5,
    marginHorizontal:10,
    paddingVertical:10,
    paddingHorizontal:20
  },
  actionText:{
    color:"#fff"
  }
  });

export default MyPage;