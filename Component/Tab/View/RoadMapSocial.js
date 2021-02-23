import React, {Component, useState} from 'react';
import {View, Text,ScrollView, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView, FlatList, Image, Button, TextInput, KeyboardAvoidingView} from 'react-native';
import{Menu, MenuOption, MenuOptions,MenuTrigger, MenuProvider} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const RoadMapSocial = (props, {navigation}) => {

  let roadMapId = props.route.params.roadMapId;
  let roadmap = props.route.params.roadmap;
  let userId = props.route.params.userId;

  let [info, setInfo] = useState(["생생하며 그들의 눈에 무엇이 타오르고 있는가? 우리 눈이 그것을 보는 때에 우리의 귀는 생의 찬미를 듣는다. 그것은 웅대한 관현악이며 미묘한 교"]);
  let [user, setUser] = useState(["익명1", "익명2", "익명3", "익명4", "익명5"]);
  let [userComment, setUserComment] = useState(["이거 좀 괜찮네", "이거 좀 괜찮네", "이거 좀 괜찮네","이거 좀 괜찮네", "이거 좀 괜찮네"]);
  let [date, setDate] = useState(["2021-02-23 14:57", "2021-02-23 14:57", "2021-02-23 14:57", "2021-02-23 14:57", "2021-02-23 14:57"]);
  let [like, setLike] = useState(["37"]);

  console.log(roadMapId);
  console.log(roadmap);

    return(
      <MenuProvider>
        <SafeAreaView style ={styles.container}>
          <ScrollView>

            {/* 최상단 부분 */}
            <View style = {styles.topArea}>
              {/* 정보 상단 */}
              <View style = {styles.top}>
                {/* 더보기 줄 */}
                <View style = {{flexDirection : 'row', flex : 1}}>
                  <View style = {{flex : 7}}></View>

                  <View style = {{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                      <Menu>
                        <MenuTrigger style = {{margin : 10}}> 
                          <Icon name='ellipsis-vertical'size={30} color="black"></Icon>
                        </MenuTrigger>
                        <MenuOptions>
                          <MenuOption onSelect={() => alert('save')} text='수정'></MenuOption>
                          <MenuOption onSelect={() => alert('delete')} text='삭제'></MenuOption>
                        </MenuOptions>
                      </Menu>
                  </View>
                </View>
                {/* 로드맵 줄 */}
                <View style = {{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                  <Image style = {styles.mindMapImage} source ={require("../../img/loadmap_illustrate.png")}></Image>
                </View>
              </View>

              {/* 정보 하단 */}
              <View>
                <Text style = {styles.roadMapName}>{roadmap}</Text>
                <Text style = {styles.roadMapInfo}>{info}</Text>
                <TouchableOpacity style = {{flexDirection : 'row'}} onPress = {() =>{
                      props.navigation.navigate("RoadMap", {roadMapId : roadMapId, roadmap : roadmap})
                    }}>
                  <View style = {{flex : 3}}></View>
                  <Text style = {{flex : 1, color : 'blue', justifyContent : 'center', alignItems : 'center', fontSize : 20, fontWeight :'bold', margin : 10}}>로드맵 보기</Text>
                </TouchableOpacity>
              </View>
            </View>
            
            
            {/* 하단 소셜 부분 */}
            <View style = {styles.bottomArea}>
              
              <View style = {{flexDirection : 'row', justifyContent : 'space-between', margin : 10}}>
                <TouchableOpacity onPress = {() =>{
                    props.navigation.navigate("commentList", {roadMapId : roadMapId})
                  }}>
                    <Text style = {{fontSize : 30, fontWeight : 'bold'}} >댓글 ></Text>
                  </TouchableOpacity>
                <TouchableOpacity style = {styles.like}>
                  <Text style = {styles.like}>♥{like}</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style = {styles.commentArea}>
                <View style = {styles.imageandname}>
                  <Image style = {styles.userimage} source = {require('../../../assets/favicon.png')}></Image>
                  <Text style = {styles.user}>{user[0]}</Text>
                </View>
                <Text style = {styles.usercomment}>{userComment[0]}</Text>
                <Text style = {styles.date}>{date[0]}</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.commentArea}>
                <View style = {styles.imageandname}>
                  <Image style = {styles.userimage} source = {require('../../../assets/favicon.png')}></Image>
                  <Text style = {styles.user}>{user[1]}</Text>
                </View>
                <Text style = {styles.usercomment}>{userComment[1]}</Text>
                <Text style = {styles.date}>{date[1]}</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.commentArea}>
                <View style = {styles.imageandname}>
                  <Image style = {styles.userimage} source = {require('../../../assets/favicon.png')}></Image>
                  <Text style = {styles.user}>{user[2]}</Text>
                </View>
                <Text style = {styles.usercomment}>{userComment[2]}</Text>
                <Text style = {styles.date}>{date[2]}</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.commentArea}>
                <View style = {styles.imageandname}>
                  <Image style = {styles.userimage} source = {require('../../../assets/favicon.png')}></Image>
                  <Text style = {styles.user}>{user[3]}</Text>
                </View>
                <Text style = {styles.usercomment}>{userComment[3]}</Text>
                <Text style = {styles.date}>{date[3]}</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.commentArea}>
                <View style = {styles.imageandname}>
                  <Image style = {styles.userimage} source = {require('../../../assets/favicon.png')}></Image>
                  <Text style = {styles.user}>{user[4]}</Text>
                </View>
                <Text style = {styles.usercomment}>{userComment[4]}</Text>
                <Text style = {styles.date}>{date[4]}</Text>
              </TouchableOpacity>
              
              <View style = {styles.insertcomment}>
                <TextInput style = {styles.comment}>
                </TextInput>
                <TouchableOpacity style = {{flex : 1, justifyContent : 'center', alignItems : 'center', backgroundColor : 'white', borderColor : 'gray', borderWidth : 1,borderRadius : 10, marginLeft : 5}}>
                  <Text style = {styles.insert}>▷</Text>
                </TouchableOpacity>
              </View>

            </View>
          </ScrollView>
        </SafeAreaView>
      </MenuProvider>
    );
}
 
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'column', // row
    backgroundColor: 'white',
  },


  mindMapImage : {
    height : hp("20%"),
    width : wp("80%"),
    justifyContent : 'center',
    alignItems : 'center',
    margin : 10,
    borderRadius : 10,
  },
  topArea : {
    flex : 1,
    backgroundColor : '#ffffff',
    shadowColor : "#000000",
    shadowOpacity : 0.3,
    shadowOffset : {width : 2, height : 2},
    elevation : 3,
    margin : 20
  },
  top : {
    flex : 1,
    backgroundColor : 'skyblue',
  },
  roadMapName : {
    flex : 1,
    margin : 10,
    fontWeight : 'bold',
    fontSize : 30,
  },
  roadMapInfo : {
    flex : 1,
    margin : 10,
    fontSize : 20
  },
  bottomArea : {
    margin : 10,
  },
  commentArea : {
    backgroundColor : '#ffffff',
    shadowColor : "#000000",
    shadowOpacity : 0.3,
    shadowOffset : {width : 2, height : 2},
    elevation : 3,
  },
  imageandname : {
    flexDirection : 'row',
    alignItems : 'center',
    margin : 5
  },
  like : {
    justifyContent : 'center',
    alignItems : 'center',
    fontSize : 25,
  },
  user : {
    fontSize : 20,
    fontWeight : 'bold',
    marginLeft : 10,
  },
  userimage : {
    height : hp('4%'),
    width : wp('9%'),
  },
  usercomment : {
    margin : 5,
    fontSize : 18
  },
  date : {
    marginLeft : 5,
    marginBottom : 5,
    color : 'gray'
  },
  insertcomment : {
    margin : 10,
    flexDirection : 'row',
    flex : 1,
  },
  comment : {
    height : 30,
    borderColor : 'gray',
    borderWidth : 1,
    borderRadius : 10,
    flex : 6
  },
  insert : {
    fontSize : 30,
  },
  });

export default RoadMapSocial;