import React, { useState } from "react";
import {StyleSheet, Text, ScrollView, TouchableOpacity, SafeAreaView,Image, View, Linking} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const MainPage = ({navigation}) => {

  const [userId, userIdModified] = useState(["garam0410"]);
  const [bookName, setBookName] = useState(["책이름1", "책이름2", "책이름3", "책이름4", "책이름5", "책이름6"]);
  const [bookSrc, setBookSrc] = useState(["https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg","https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg","https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg","https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg","https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg","https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg","https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg"]);
  const [bookUrl, setBookUrl] = useState(["https://www.naver.com"]);
  const [roadmap, setRoadMap] = useState(["웹 개발자 로드맵", "이거면 하나면 나도 보안 전문가!", "인공지능학개론", "분산 처리의 정석", "나만의 비밀노트"])

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
          <TouchableOpacity onPress = {() =>{
              navigation.navigate("MyPage", {userId : userId[0]})
            }}>
            <Text>마이 페이지</Text>
          </TouchableOpacity>

            {/* 사용자 마인드맵 */}
          <TouchableOpacity style = {styles.mindMapArea}>
            <Image style = {styles.mindMapImage} source = {require('../img/loadmap_illustrate_fix.png')}></Image>
          </TouchableOpacity>

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
          <View style = {styles.rankArea}>
            <Text style = {styles.rankName}>인기 로드맵</Text>
                  <View style = {styles.roadMapRankArea}>
                    <TouchableOpacity>
                      <Text style = {styles.roadMapName}>1. {roadmap[0]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style = {styles.roadMapName}>2. {roadmap[1]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style = {styles.roadMapName}>3. {roadmap[2]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style = {styles.roadMapName}>4. {roadmap[3]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
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
    margin : 10,
    flexDirection : 'row',
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
    // borderColor : 'skyblue',
    // borderRadius : 10,
    // borderWidth : 4,
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