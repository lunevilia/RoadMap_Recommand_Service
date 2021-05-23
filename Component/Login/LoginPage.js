import React, { useState } from "react";
import {StyleSheet, Text, ScrollView, TouchableOpacity, View, TextInput} from "react-native";
import {StackActions} from "@react-navigation/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-community/async-storage';
import { CheckBox } from 'react-native-elements';


const LoginPage = ({navigation}) => {

    const [inputId, setInputId] = useState([""]);
    const [inputPw, setInputPw] = useState([""]);

    const [ip, setIp] = useState();
    const [autoLogin, setAutoLogin] = useState();

    const [loading, setLoading] = useState(false);

    const [loginCheck, setLoginCheck] = useState("0");

    AsyncStorage.getItem("autoLogin").then((value) => {
      console.log(value);
    })

    AsyncStorage.getItem("ip").then((value) =>{
      setIp(value);
    });

    AsyncStorage.getItem("inputId").then((value) =>{
      if(value == null){

      }
      else{
        setInputId(value);
      }
    });
    AsyncStorage.getItem("inputPw").then((value) =>{
      if(value == null){

      }
      else{
        setInputPw(value);
      }
    });

    AsyncStorage.getItem("autoLogin").then((value) => {
      
      if(value == "false"){
        setAutoLogin(false);
      }
      else if(value == "true"){
        setAutoLogin(true);
      }
    })

    const checkAutoLogin = () =>{
      if(autoLogin == false){
        setAutoLogin(true);
        AsyncStorage.setItem("autoLogin","true");
      }
      else if (autoLogin == true){
        setAutoLogin(false);
        AsyncStorage.setItem("autoLogin", "false");
      }
    }

    const checkInfo = () =>{
        navigation.dispatch(
            StackActions.replace('main', {userId : inputId})
        );//임시 강제 로그인
        
        if(inputId == ""){
            alert("아이디를 입력해주세요.");
        }
        else if(inputPw == ""){
            alert("비밀번호를 입력해주세요.");
        }
        else{
            login();
        }
    }

    if(loginCheck == "0"){
      if(autoLogin == true){
        setLoginCheck("1");
        login();
      }
    }

    async function login(){
      setLoading(true);
        try{
          const response = await axios.get("http://"+ip+":8080/login",{
            params : {
              userId : inputId,
              userPw : inputPw,
            }
          });
          
          let result = response.data
          
          if (result == "success") {

            AsyncStorage.setItem("inputId", inputId);
            AsyncStorage.setItem("inputPw", inputPw);

            navigation.dispatch(
                StackActions.replace('main', {userId : inputId})
            );
          }
          else if(result == "noExist"){
            alert("회원정보가 올바르지 않습니다. \n아이디 또는 패스워드를 확인해주세요.");
          }
          else{
            alert("로그인에 실패하였습니다.");
          }
      setLoading(false);
        }catch(error) {
          console.error(error);

          navigation.dispatch(
            StackActions.replace('main', {userId : inputId})
        );//임시 강제 로그인
        }
      }

  return(
      <ScrollView style={styles.container}>
        <Spinner
          visible = {loading}
          textContent ={"로그인 중..."}>
        </Spinner>
        <View style={styles.titleArea}>
                    <Text style={styles.title}>LoadMap</Text>
                </View>
                <View style={styles.formArea}>
                    <TextInput 
                        style={styles.textForm} 
                        placeholder={"아이디 입력"}
                        onChangeText = {
                          (inputId) => setInputId(inputId)
                        }/>
                    <TextInput 
                        style={styles.textForm} 
                        placeholder={"비밀번호"}
                        onChangeText = {
                          (inputPw) => setInputPw(inputPw)
                        }/>
                </View>

                <View style={styles.buttonArea}>

                    <View>
                      <CheckBox
                      center
                      title = "자동 로그인"
                      containerStyle = {{height : "100%"}}
                      checked = {autoLogin}
                      onPress = {checkAutoLogin}
                      >

                      </CheckBox>
                    </View>

                    <TouchableOpacity 
                        style={styles.button}
                        onPress={checkInfo}>
                        <Text style={styles.buttonTitle}>로그인</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style = {styles.button}
                        onPress = {() => {
                          navigation.dispatch(
                            StackActions.replace('회원가입')
                            )
                          }}>
                        <Text style = {styles.buttonTitle}>회원가입</Text>
                    </TouchableOpacity>
                </View>

    </ScrollView>
  );
} 

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'column', // row
    backgroundColor: 'white',
  },
   titleArea: {
        width: '100%',
        padding: wp('10%'),
        alignItems: 'center',
    },
    title: {
        fontSize: wp('10%'),
        fontWeight : 'bold',
    },
    formArea: {
        width: '100%',
        alignItems : 'center',
        paddingBottom: wp('10%'),
    },
    textForm: {
        borderWidth: 0.5,
        borderColor: '#888',
        width: '80%',
        height: hp('5%'),
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 5,
    },
    buttonArea: {
        alignItems : 'center',
        width: '100%',
        height: hp('5%'),
    },
    button: {
        backgroundColor: "skyblue",
        width: "50%",
        height: "100%",
        marginTop : 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius : 20,
    },
    buttonTitle: {
        color: 'white',
        fontWeight : 'bold',
    },
});

export default LoginPage;