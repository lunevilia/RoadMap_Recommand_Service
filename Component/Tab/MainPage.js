import React, { useState } from "react";
import {StyleSheet, Text, ScrollView, TouchableOpacity, SafeAreaView,Image, View, Linking} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const MainPage = (props,{navigation}) => {

  const userId = props.userId;
  const api = "KakaoAK aef53ecb905e1cbffcf4b411286c0ca0";
  
  // App.js ip 받아오기
  const [ip,setIp] = useState();
  AsyncStorage.getItem("ip").then((value) => {
    setIp(value);
  });

  // const userId = props.route.params.userId;
  var [bookName, setBookName] = useState(["-", "-", "-", "-", "-", "-"]);
  const [bookSrc, setBookSrc] = useState(["-","-","-","-","-","-"]);
  const [bookUrl, setBookUrl] = useState(["-","-","-","-","-","-"]);
  const [roadmap, setRoadMap] = useState(["-","-","-","-","-"])
  const [roadMapId, setRoadMapId] = useState(["-","-","-","-","-"])

  const [getbook, setGetBook] = useState(["0"]);
  const [getrank, setGetRank] = useState(["0"]);

  if(getbook == "0"){
    if (ip != null){
      getTopBook();
      setGetBook("1");
    }
  }

  if(getrank == "0"){
    if(ip != null){
      getTopRoadmap();
      setGetRank("1");
    }
  }

  //책 순위 가져오기
  async function getTopBook(){
    try{
      var newBookNameArray = [...bookName];

      // const response = await axios.get("http://"+ip+":8081/gettopbook");
      const response = await axios.get("http://"+ip+":8081/gettopbook");

      for (var i = 0; i<bookName.length; i++){
        newBookNameArray[i] = response.data[i].BNAME;
      }

      setBookName(newBookNameArray);
      console.log("book success");
      getBookInfo(newBookNameArray);
    }catch(error){
      console.log(error);
    }
  }

  //카카오 api 책정보
  // https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide#search-book
  async function getBookInfo(bookarray){
    var newSrcArray = [...bookSrc];
    var newUrlArray = [...bookUrl];
  
    for(var i = 0; i<bookName.length; i++){
      try {
        const response = await axios.get("https://dapi.kakao.com/v3/search/book?",{
          params : {
            sort : 'accuracy',
            page : 1,
            size : 1,
            query : bookarray[i]
          },
          headers: {
            Authorization: api
          }
        });
  
        let result = response.data;
        newSrcArray[i] = result.documents[0].thumbnail;
        newUrlArray[i] = result.documents[0].url;
  
      } catch (error) {
        console.error(error);
      }
    }
  
    setBookSrc(newSrcArray);
    setBookUrl(newUrlArray);
    console.log("success");
  }

  //로드맵 순위 가져오기
  async function getTopRoadmap(){
    try{
      var newRoadmapArray = [...roadmap];
      var newRoadmapIdArray = [...roadMapId];

      const response = await axios.get("http://"+ip+":8081/gettoprank");

      for(var i = 0; i<5; i++){
        newRoadmapArray[i] = response.data[i].RNAME;
        newRoadmapIdArray[i] = response.data[i].RID;
      }

      setRoadMap(newRoadmapArray);
      setRoadMapId(newRoadmapIdArray);

      console.log("roadmap success");
    } catch(error){
      console.error(error);
    }
  }

  //책 목록 컴포넌트화
  const bookList = bookSrc.map((bookSrc, index) => 
    (              
      <TouchableOpacity key = {index} style = {styles.imageArea} onPress ={() =>{
        //Linking.openURL(bookUrl[index])
        props.navigation.navigate("bookinfo", {bookUrl : bookUrl[index]});
      }}>
        <Image style = {styles.image} source = {{uri : bookSrc}}></Image> 
        <Text style = {styles.imageName}>{bookName[index]}</Text>
      </TouchableOpacity>
    )
  );
    
  //로드맵 순위 컴포넌트화
  const roadMapList = roadmap.map((roadmap, index) =>(
    <TouchableOpacity key = {index} onPress = {() =>{
      props.navigation.navigate("RoadMapSocial", {roadMapId : roadMapId[index], roadmap : roadmap, userId : userId, ip : ip})
    }}>
        <Text style = {styles.roadMapName}>{index+1}.  {roadmap}</Text>
      </TouchableOpacity>
    )
  );

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
            {/* 사용자 마인드맵 */}
            <View style = {{flex : 1, margin : 10}}>

              <View style = {{flexDirection : 'row', justifyContent : 'space-between'}}>
                <Text style = {styles.rankName}>로드맵</Text>

                <TouchableOpacity style = {{justifyContent : 'center', margin : 10}} onPress = {() =>{
                    props.navigation.navigate("MyPage", {userId : userId, ip : ip})
                  }}>
                  <Text style = {{color : 'blue', fontSize : 20}}>마이 페이지</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style = {styles.mindMapArea} onPress = {() =>{
                    props.navigation.navigate("MyPage", {userId : userId, ip : ip})
                  }}>
                <Image style = {styles.mindMapImage} source = {require('../img/loadmap_illustrate_fix.png')}></Image>
              </TouchableOpacity>
            </View>

            <View style = {styles.line}></View>

          {/* 인기 책순위  */}
          <View style = {styles.rankArea} >

            <Text style = {styles.rankName}>인기 책 순위</Text>

            <ScrollView horizontal = {true}>
                {bookList}
            </ScrollView>
          </View>

          <View style = {styles.line}></View>

          {/* 인기 로드맵 */}
          <View style = {styles.rankArea}>
            <Text style = {styles.rankName}>인기 로드맵</Text>
                  <View style = {styles.roadMapRankArea}>
                    {roadMapList}
                  </View>
          </View>

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
    borderWidth : 3,
  },

  mindMapArea : {
    flex : 1,
    borderColor : 'skyblue',
    borderWidth : 4,
    borderRadius : 10,
    justifyContent : 'center'
  },

  mindMapImage : {
    height : hp("20%"),
    width : wp("90%"),
    justifyContent : 'center',
  },
  myPageButton : {

  },
  rankArea : {
    flex : 1,
    margin : 10
  },
  rankName : {
    fontSize : 30,
    fontWeight : 'bold',
    padding : 10
  },
  imageArea : {
    justifyContent : 'center'
  },
  image : {
    height : 150,
    width : 100,
    margin : 10,
    borderColor : 'lightgray',
    borderWidth : 1
  },
  imageName : {
    fontSize : 15,
    fontWeight : 'normal',
    textAlign : 'center',
  },

  roadMapRankArea : {
    borderRadius : 10, 
    borderWidth : 4, 
    borderColor : 'gray',
    margin : 10
  },
  roadMapName : {
    fontSize : 20,
    fontWeight : 'bold',
    margin : 10
  },
});

export default MainPage;