import React, {useState} from "react";
import {StyleSheet, Text, ScrollView, View,TouchableOpacity,Image} from "react-native";

const NoticePage = ({navigation}) => {

  const [noticeName, noticeNameModified] = useState(['자유게시판', '조언방', '토론방', '질문방'])

  return(
    <ScrollView style={styles.container}>
        <View style={styles.top}>
        <Text style={styles.category_subtitle}>게시판 목록</Text>
            <TouchableOpacity style= {styles.button} onPress = {() =>{
            navigation.navigate("NoticePage", {noticeName : noticeName[0]})
          }}>
            <Image style={styles.image} source={require('../img/1.png')} />
             <Text style={styles.category_button}>자유 게시판</Text>
            </TouchableOpacity>

            <TouchableOpacity style= {styles.button} onPress = {() =>{
            navigation.navigate("NoticePage", {noticeName : noticeName[1]})
          }}>
            <Image style={styles.image} source={require('../img/2.png')} />
             <Text style={styles.category_button}>조언방</Text>
            </TouchableOpacity>

            <TouchableOpacity style= {styles.button} onPress = {() =>{
            navigation.navigate("NoticePage", {noticeName : noticeName[2]})
          }}>
              <Image style={styles.image} source={require('../img/3.png')} />
             <Text style={[styles.category_button, {marginLeft: 14}]}>토론방</Text>
            </TouchableOpacity>

            <TouchableOpacity style= {styles.button} onPress = {() =>{
            navigation.navigate("NoticePage", {noticeName : noticeName[3]})
          }}>
            <Image style={styles.image} source={require('../img/4.png')} />
             <Text style={styles.category_button}>질문방</Text>
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

export default NoticePage;