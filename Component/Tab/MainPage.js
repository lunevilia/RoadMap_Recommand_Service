import React, { useState } from "react";
import {StyleSheet, Text, ScrollView, TouchableOpacity, SafeAreaView,Image, View, Linking} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const MainPage = ({navigation}) => {

  const [userId, userIdModified] = useState(["garam0410"]);
  const [bookName, setBookName] = useState(["책이름1", "책이름2", "책이름3", "책이름4", "책이름5", "책이름6"]);
  const [bookSrc, setBookSrc] = useState(["https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg","https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg","https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg","https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg","https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg","https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg","https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg"]);
  const [bookUrl, setBookUrl] = useState(["https://www.naver.com"]);
  const [roadmap, setRoadMap] = useState(["웹 개발자 로드맵", "이거면 하나면 나도 보안 전문가!", "인공지능학개론", "분산 처리의 정석", "나만의 비밀노트"])
  const [roadMapId, setRoadMapId] = useState(["0", "1", "2", "3", "4"])

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
            {/* 사용자 마인드맵 */}
            <View style = {{flex : 1, margin : 10}}>

              <View style = {{flexDirection : 'row', justifyContent : 'space-between'}}>
                <Text style = {styles.rankName}>로드맵</Text>

                <TouchableOpacity style = {{justifyContent : 'center', margin : 10}} onPress = {() =>{
                    navigation.navigate("MyPage", {userId : userId[0]})
                  }}>
                  <Text style = {{color : 'blue', fontSize : 20}}>마이 페이지</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style = {styles.mindMapArea}>
                <Image style = {styles.mindMapImage} source = {require('../img/loadmap_illustrate_fix.png')}></Image>
              </TouchableOpacity>
            </View>

            <View style = {styles.line}></View>

          {/* 인기 책순위  */}
          <View style = {styles.rankArea}>

            <Text style = {styles.rankName}>인기 책 순위</Text>

            <ScrollView horizontal = {true}>
              <TouchableOpacity style = {styles.imageArea} onPress ={() =>{
                  Linking.openURL(bookUrl[0])
                }}>
                  <Image style = {styles.image} source = {{uri : bookSrc[0]}}></Image> 
                  <Text style = {styles.imageName}>{bookName[0]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.imageArea} onPress ={() =>{
                  Linking.openURL(bookUrl[0])
                }}>
                  <Image style = {styles.image} source = {{uri : bookSrc[0]}}></Image> 
                  <Text style = {styles.imageName}>{bookName[1]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.imageArea} onPress ={() =>{
                  Linking.openURL(bookUrl[0])
                }}>
                  <Image style = {styles.image} source = {{uri : bookSrc[0]}}></Image> 
                  <Text style = {styles.imageName}>{bookName[2]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.imageArea} onPress ={() =>{
                  Linking.openURL(bookUrl[0])
                }}>
                  <Image style = {styles.image} source = {{uri : bookSrc[0]}}></Image> 
                  <Text style = {styles.imageName}>{bookName[3]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.imageArea} onPress ={() =>{
                  Linking.openURL(bookUrl[0])
                }}>
                  <Image style = {styles.image} source = {{uri : bookSrc[0]}}></Image> 
                  <Text style = {styles.imageName}>{bookName[4]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.imageArea} onPress ={() =>{
                  Linking.openURL(bookUrl[0])
                }}>
                  <Image style = {styles.image} source = {{uri : bookSrc[0]}}></Image>  
                  <Text style = {styles.imageName}>{bookName[5]}</Text>
                </TouchableOpacity>
            </ScrollView>
          </View>

          <View style = {styles.line}></View>

          {/* 인기 로드맵 */}
          <View style = {styles.rankArea}>
            <Text style = {styles.rankName}>인기 로드맵</Text>
                  <View style = {styles.roadMapRankArea}>
                  <TouchableOpacity onPress = {() =>{
                    navigation.navigate("RoadMapSocial", {roadMapId : roadMapId[0], roadmap : roadmap[0], userId : userId})
                  }}>
                      <Text style = {styles.roadMapName}>1. {roadmap[0]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() =>{
                    navigation.navigate("RoadMapSocial", {roadMapId : roadMapId[1], roadmap : roadmap[1], userId : userId})
                  }}>
                      <Text style = {styles.roadMapName}>2. {roadmap[1]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() =>{
                    navigation.navigate("RoadMapSocial", {roadMapId : roadMapId[2], roadmap : roadmap[2], userId : userId})
                  }}>
                      <Text style = {styles.roadMapName}>3. {roadmap[2]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() =>{
                    navigation.navigate("RoadMapSocial", {roadMapId : roadMapId[3], roadmap : roadmap[3], userId : userId})
                  }}>
                      <Text style = {styles.roadMapName}>4. {roadmap[3]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() =>{
                    navigation.navigate("RoadMapSocial", {roadMapId : roadMapId[4], roadmap : roadmap[4], userId : userId})
                  }}>
                      <Text style = {styles.roadMapName}>5. {roadmap[4]}</Text>
                    </TouchableOpacity>
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