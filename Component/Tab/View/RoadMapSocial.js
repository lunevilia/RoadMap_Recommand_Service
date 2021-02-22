import React, {Component, useState} from 'react';
import {View, Text,ScrollView, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView, FlatList, Image, Button} from 'react-native';
import{Menu, MenuOption, MenuOptions,MenuTrigger, MenuProvider} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const RoadMapSocial = (props, {navigation}) => {

  let roadMapId = props.route.params.roadMapId;
  let roadmap = props.route.params.roadmap;
  let [info, setInfo] = useState(["생생하며 그들의 눈에 무엇이 타오르고 있는가? 우리 눈이 그것을 보는 때에 우리의 귀는 생의 찬미를 듣는다. 그것은 웅대한 관현악이며 미묘한 교"]);

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
          <View>

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
  });

export default RoadMapSocial;