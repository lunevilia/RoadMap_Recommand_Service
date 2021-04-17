import React, { useState } from "react";
import {StyleSheet, Text, ScrollView, TouchableOpacity, SafeAreaView,Image, View, Linking} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import axios from 'axios';
import {SearchBar} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

const SearchPage = (props, {navigation}) => {

  let userId = props.route.params.userId;

  const [ip,setIp] = useState();
  AsyncStorage.getItem("ip").then((value) => {
    setIp(value);
  });

  const [rname, setRname] = useState([]);
  const [rid, setRid] = useState([]);
  const [uid, setUid] = useState([]);

  const [query, setQuery] = useState("");

  //검색상황 반영
  const updateQuery = (query) => {
    setQuery({query});
    console.log(query);
  }

  async function searchRoadmap(){
    var newRidArray = [];
    var newUidArray = [];
    var newRnameArray = [];

    const response = await axios.get("http://"+ip+":8083/getsearchroadmap", {
      params : {
        query : query
      }
    });

    result = response.data;

    for (var i = 0; i < result.length; i++){
      newRidArray.push(result[i].RID);
      newUidArray.push(result[i].UID);
      newRnameArray.push(result[i].RNAME);
    }

    setRid(newRidArray);
    setUid(newUidArray);
    setRname(newRnameArray);
  }

    // 검색결과 로드맵 컴포넌트
    const RoadmapList = rid.map((rid, index) =>(
      <TouchableOpacity key = {index} onPress = {() =>{
        props.navigation.navigate("RoadMapSocial", {roadMapId : rid, ruid : uid[index] ,roadmap : rname[index], userId : userId, ip : ip})
      }}>
        <View style = {styles.element}>

          <View style = {styles.roadmapimageblock}>
            <Image style = {styles.roadmapImage} source = {require("../../img/loadmap_illustrate.png")}></Image>
          </View>

          <View style = {styles.roadmpaNameBlock}>
            <Text style = {styles.roadmapName}>{rname[index]}</Text>
          </View>
          
        </View>
        
        <View style = {styles.line}></View>
        </TouchableOpacity>
    )
  );

    return(

      <SafeAreaView style ={styles.container}>

        <View style = {{justifyContent : 'center', margin : 10, flexDirection : 'row'}}>
          <SearchBar
              lightTheme = 'true'
              round = "true"
              onChangeText = {updateQuery}
              value = {query}
              autoFocus = {true}
              platform = "ios"
              containerStyle = {{flex : 4, backgroundColor : 'white', height : 'auto', borderWidth : 1, borderRadius : 10, borderColor : 'gray'}}
              inputContainerStyle = {{backgroundColor : 'white', height : 20}}>
          </SearchBar>

          <TouchableOpacity style = {{flex : 1, alignContent : 'center', justifyContent : 'center', borderColor : 'black', borderWidth : 1, borderRadius : 10, marginLeft : 10}}
            onPress = {searchRoadmap}>
            <Text style = {{fontSize : 20, fontWeight : 'bold', justifyContent : 'center', textAlign : 'center'}}>검색</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style = {{flex : 1}}>
          {RoadmapList}
        </ScrollView>

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
  line : {
    borderColor : 'lightgray',
    borderWidth : 0.5,
  },
  element : {
    flexDirection : 'row',
    alignItems : 'center',
  },
  roadmapimageblock : {
    alignItems : 'center'
  },
  roadmapImage : {
    height : 60,
    width : 100,
  },
  roadmpaNameBlock : {
    alignItems : 'center',
    flex : 1
  },
  roadmapName : {
    fontSize : 20,
    fontWeight : 'bold',
  },
  });

export default SearchPage;