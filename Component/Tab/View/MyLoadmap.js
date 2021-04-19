import axios from 'axios';
import React, {Component, useState} from 'react';
import { render } from 'react-dom';
import { Animated, View, TouchableOpacity, StyleSheet,Dimensions, ScrollView, Image, Text  } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const MyLoadmap = (props, {navigation}) => {

    let userId = props.route.params.userId;
    let ip = props.route.params.ip;

    //좋아요 로드맵
    let [rid, setRid] = useState([]);
    let [uid, setUid] = useState([]);
    let [rname, setRname] = useState([]);

    //사용자 로드맵
    let [urid, setUrid] = useState([]);
    let [uuid, setUuid] = useState([]);
    let [urname, setUrname] = useState([]);

    let [getdata,setGetData] = useState(["0"]);

    if(getdata == "0"){
      if(ip != null){
        getLikeRoadmap();
        getUserRoadmap();
        setGetData("1");
      }
    }

    //좋아요 로드맵 불러오기
    async function getLikeRoadmap(){
      try {
        var newRidArray = [];
        var newUidArray = [];
        var newRnameArray = [];

        const response = await axios.get("http://"+ip+":8083/getuserloveroadmap",{
          params : {
            userId : userId
          }
        });

        let result = response.data;

        for(var i = 0; i<result.length; i++){
          newRidArray.push(result[i].RID);
          newUidArray.push(result[i].UID);
          newRnameArray.push(result[i].RNAME);
          
        }
        setRid(newRidArray);
        setUid(newUidArray);
        setRname(newRnameArray);

      } catch (error) {
        console.log(error);
      }
    }

    //좋아요 로드맵 컴포넌트
    const userloveroadMap = rid.map((rid, index) =>(
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

    //사용자 로드맵 불러오기
    async function getUserRoadmap(){
      try {
        var newRidArray = [];
        var newUidArray = [];
        var newRnameArray = [];

        const response = await axios.get("http://"+ip+":8083/getuserroadmap",{
          params : {
            userId : userId
          }
        });

        let result = response.data;

        for(var i = 0; i<result.length; i++){
          newRidArray.push(result[i].RID);
          newUidArray.push(result[i].UID);
          newRnameArray.push(result[i].RNAME);
        }
        setUrid(newRidArray);
        setUuid(newUidArray);
        setUrname(newRnameArray);

      } catch (error) {
        console.log(error);
      }
    }
    
    //사용자 로드맵 컴포넌트
    const userroadmap = urid.map((urid, index) => (
      <TouchableOpacity key = {index} onPress = {() =>{
        props.navigation.navigate("RoadMapSocial", {roadMapId : urid, ruid : uuid[index] ,roadmap : urname[index], userId : userId, ip : ip})
      }}>
        <View style = {styles.element}>

          <View style = {styles.roadmapimageblock}>
            <Image style = {styles.roadmapImage} source = {require("../../img/loadmap_illustrate.png")}></Image>
          </View>

          <View style = {styles.roadmpaNameBlock}>
            <Text style = {styles.roadmapName}>{urname[index]}</Text>
          </View>
          
        </View>
        
        <View style = {styles.line}></View>
        </TouchableOpacity>
    ));

    const myRoadmap = () => (
        <View style={styles.container}>
          {userroadmap}
        </View>
      );

      const likeRoadmap = () =>(
        <View style={styles.container}>  
          <ScrollView style = {styles.list}>
            {userloveroadMap}
          </ScrollView>
        </View>
      );

       
      const initialLayout = {width: Dimensions.get('window').width };

      const [index, setIndex] = useState(0);
      const [routes, setRoutes] = useState([
        { key: 'first', title: '내 로드맵' },
        { key: 'second', title: '좋아요' }
      ]);
    
      const renderScene = SceneMap({
        first : myRoadmap,
        second : likeRoadmap
      });
     
      return (
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
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

export default MyLoadmap;