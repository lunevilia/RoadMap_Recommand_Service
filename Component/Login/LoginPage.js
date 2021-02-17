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
                        placeholder={"ID"}/>
                    <TextInput 
                        style={styles.textForm} 
                        placeholder={"Password"}/>
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
                                StackActions.replace('signin')
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
    },
    formArea: {
        width: '100%',
        paddingBottom: wp('10%'),
    },
    textForm: {
        borderWidth: 0.5,
        borderColor: '#888',
        width: '100%',
        height: hp('5%'),
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 5,
    },
    buttonArea: {
        width: '100%',
        height: hp('5%'),
    },
    button: {
        backgroundColor: "skyblue",
        width: "100%",
        height: "100%",
        marginTop : 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTitle: {
        color: 'white',
    },
});

export default LoginPage;