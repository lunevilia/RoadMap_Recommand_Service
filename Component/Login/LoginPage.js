import React, { useState } from "react";
import {StyleSheet, Text, ScrollView, TouchableOpacity, View, TextInput} from "react-native";
import {StackActions} from "@react-navigation/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const LoginPage = ({navigation}) => {
  return(
    <ScrollView style={styles.container}>

        <View style={styles.titleArea}>
                    <Text style={styles.title}>LoadMap</Text>
                </View>
                <View style={styles.formArea}>
                    <TextInput 
                        style={styles.textForm} 
                        placeholder={"아이디 입력"}/>
                    <TextInput 
                        style={styles.textForm} 
                        placeholder={"비밀번호"}/>
                </View>

                <View style={styles.buttonArea}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() =>{
                            navigation.dispatch(
                                StackActions.replace('main')
                            )
                          }}>
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