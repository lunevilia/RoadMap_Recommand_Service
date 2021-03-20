import React, {Component, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, SectionList, FlatList, Image, Button, ImageEditor} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'; // width, height
import{Menu, MenuOption, MenuOptions,MenuTrigger, MenuProvider} from 'react-native-popup-menu';

import Icon from 'react-native-vector-icons/Ionicons';


const RoadMap = (props, {navigation}) => {

    let roadMapId = props.route.params.roadMapId;
    let roadmap = props.route.params.roadmap;

    const sections = [
      {
        title: "Vegetables",
        key: "vegetables",
        data: [
         {
           key: "vegetables",
           list: [
              {
                name: "Carrot",
                color: "Orange",
              },
              {
                name: "Cabbage",
                color: "Purple",
              },
            ],
          },
        ],
      },
      {
        title: "Fruits",
        key: "fruits",
        data: [
          {
            key: 'fruits',
            list: [
              {
                name: "Apple",
                color: "Green",
              },
              {
                name: "Banana",
                color: "Yellow",
              },
              {
                name: "Strawberry",
                color: "Red",
              },
              {
                name: "Blueberry",
                color: "Blue",
              },
            ],
          },
        ],
      },
    ]

    const renderSection = ({ item }) => {
      return (
        <FlatList
          data={item.list}
          numColumns={3}
          renderItem={renderListItem}
          keyExtractor={keyExtractor}
        />
      )
    }

    const renderSectionHeader = ({ section }) => {
      return <TouchableOpacity><Text>{section.title}</Text></TouchableOpacity>
    }

    const renderListItem = ({ item }) => {
      return (
        <View style={{height: 50, width: 100, borderColor: "green", borderWidth: 1 }}>
          <Text>{item.name}</Text>
          <Text>{item.color}</Text>
        </View>
      )
    }

    const keyExtractor = (item) => {
      return item.name
    }

    return (
        <SafeAreaView style = {styles.container}>

          {/* 상단 로드맵 뷰 */}
          <View style = {styles.container}>
              <Text style = {styles.Texts}>
                  {roadmap}
              </Text>

            <MenuProvider>
            <View style = {styles.roadview}>
              <View style = {{flexDirection : 'row', flex : 1}}>

                {/* 더보기 */}

                <View style = {{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                    <Menu>
                      <MenuTrigger style = {{margin : 10}}> 
                        <Icon name='ellipsis-vertical'size={30} color="black"></Icon>
                      </MenuTrigger>
                      <MenuOptions>
                          <MenuOptions><TouchableOpacity style = {[styles.menuText]} onPress = {() => {
                            props.navigation.navigate("ModifyRoadMap", {roadMapId : roadMapId, roadmap : roadmap})
                          }}><Text>수정</Text></TouchableOpacity></MenuOptions>
                          <MenuOption><TouchableOpacity onPress = {() => {
                            alert('삭제')
                          }}><Text>삭제</Text></TouchableOpacity></MenuOption>
                      </MenuOptions>
                    </Menu>
                </View>
        
                <View style = {{flex : 9}}>

                <FlatList>
                  
                </FlatList>
                <SectionList
                  sections={sections}
                  renderSectionHeader={renderSectionHeader}
                  renderItem={renderSection}
                />
                </View>
              </View>

            </View>
            </MenuProvider>
          </View>
        </SafeAreaView>
    );

    
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'column', // row
    backgroundColor: 'white',
    alignItems : "center",
  },
  roadview : {
    height : hp("75%"),
    width : wp("90%"),
    backgroundColor : "#BFC8D7",
    borderRadius : 15,
  },
  Texts : {
    fontSize : 20,
    marginBottom : 10,
    marginTop : 10
  },
  menuText : {
    marginLeft : 5
  },
  modifyView : {
    backgroundColor : "#909FA6",
    height : hp("20%"),
    width : wp("90%"),
    borderRadius : 15,
  }
});

export default RoadMap;