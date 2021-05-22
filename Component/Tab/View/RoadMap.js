import React, {Component, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, SectionList, FlatList, Image, Button, ImageEditor} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'; // width, height
import{Menu, MenuOption, MenuOptions,MenuTrigger, MenuProvider} from 'react-native-popup-menu';

import Icon from 'react-native-vector-icons/Ionicons';


const RoadMap = (props, {navigation}) => {

    let roadMapId = props.route.params.roadMapId;
    let roadmap = props.route.params.roadmap;

    const [startfirst, setstart] = useState(true);
    const [callStem, setStem] = useState(null);

    const root = {
      title : "빅데이터",
      key : "bigdata"
    }

    const sections = [
      {
        level : 0,
        title: "줄기1",
        key: "줄기1",
        data: [
         {
           key: "줄기1",
           list: [
              {
                name: "bookname1",
                color: "설명1",
              },
              {
                name: "bookname2",
                color: "설명1",
              },
            ],
          },
        ],
      },
      {
        level : 1,
        title: "줄기2",
        key: "줄기2",
        data: [
          {
            key: '줄기2',
            list: [
              {
                name: "bookname1",
                color: "설명1",
              },
              {
                name: "bookname2",
                color: "설명1",
              },
              {
                name: "bookname3",
                color: "설명1",
              },
              {
                name: "bookname4",
                color: "설명1",
              },
            ],
          },
        ],
      },
    ]

    const stemList = [
      {
        level : 0,
        title: "가지1",
        key: "가지1",
        data: [
         {
           key: "가지1",
           list: [
              {
                name: "bookname1",
                color: "설명1",
                key: "가지1",
              },
              {
                name: "bookname2",
                color: "설명1",
                key: "가지1",
              },
            ],
          },
        ],
      },
      {
        level : 1,
        title: "가지2",
        key: "가지2",
        data: [
          {
            key: '가지2',
            list: [
              {
                name: "bookname5",
                color: "설명1",
                key: '가지2',
              },
              {
                name: "bookname6",
                color: "설명1",
                key: '가지2',
              },
              {
                name: "bookname7",
                color: "설명1",
                key: '가지2',
              },
              {
                name: "bookname8",
                color: "설명1",
                key: '가지2',
              },
            ],
          },
        ],
      },
    ]

    const mindlayout = {
      "root": {
          "name": "root",
          "children": [
              {
                  "name": "child-1",
                  "children": [
                      {
                          "name": "child-1-1"
                      },
                      {
                          "name": "child-1-2",
                          "children": [
                              {
                                  "name": "child-1-2-1"
                              }
                          ]
                      }
                  ]
              },
              {
                  "name": "child-2"
              },
              {
                  "name": "child-3"
              },
              {
                  "name": "child-4",
                  "children": [
                      {
                          "name": "child-4-1"
                      },
                      {
                          "name": "child-4-2"
                      }
                  ]
              }
          ]
      },
      "links": [
          {
              "source": "child-1-1",
              "name": "special link",
              "target": "child-2"
          }
      ]
  }

    const [myRoot, setmyRoot] = useState(root);
    const [mySection, setmySection] = useState(sections);
    const [myStem, setmyStem] = useState(stemList);
    const [mylevel, setlevel] = useState(-1);

    const renderSection = ({ item }) => {
      return (
        <FlatList
          data={item.list}
          numColumns={2}
          renderItem={renderListItem}
          keyExtractor={keyExtractor}
        />
      )
    }

    const renderStem = ({ item }) => {
      return (
        <FlatList
          data={item.list}
          numColumns={2}
          renderItem={renderListStem}
          keyExtractor={keyExtractor}
        />
      )
    }

    const renderSectionHeader = ({ section }) => {
      return <TouchableOpacity onPress = {() => {setlevel(section.level);}}><Text>{section.title}</Text></TouchableOpacity>
    }


    const renderStemHeader = ({ section }) => {
      if (myStem[mylevel].key == section.key) {
        return <TouchableOpacity onPress = {() => {}}><Text>{section.title}</Text></TouchableOpacity>
      }
    }

    // const renderStem = ({ item }) => {
    //   return (
    //     <FlatList
    //       data={item.list}
    //       numColumns={3}
    //       renderItem={renderListItem}
    //       keyExtractor={keyExtractor}
    //     />
    //   )
    // }

    const renderListItem = ({ item }) => {
      return (
        <View style={{height: 50, width: 100, borderColor: "green", borderWidth: 1 }}>
          <TouchableOpacity><Text>{item.name}</Text></TouchableOpacity>
          <TouchableOpacity><Text>{item.color}</Text></TouchableOpacity>
        </View>
      )
    }

    const renderListStem = ({ item }) => {
      if (myStem[mylevel].key == item.key) {
        return (
          <View style={{height: 50, width: 100, borderColor: "green", borderWidth: 1 }}>
            <TouchableOpacity><Text>{item.name}</Text></TouchableOpacity>
            <TouchableOpacity><Text>{item.color}</Text></TouchableOpacity>
          </View>
        )
      }
    }

    const keyExtractor = (item) => {
      return item.name
    }

    //if not good 삭제할 필요 있음
    const MindmapLayouts = require('mindmap-layouts')
    const layout = new MindmapLayouts.Standard(root, options) // root is tree node like above
    const rootNode = layout.doLayout()

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

                {startfirst ? (
                  <View>
                  <TouchableOpacity onPress ={() => setstart(!startfirst)}><Text>{root.title}</Text></TouchableOpacity>
                  <Text>----테스터 용</Text>
                  <Text>{myRoot.title} and {myStem[0].title}</Text>
                  </View>
                ) : (
                  <View>
                  <TouchableOpacity onPress ={() => setstart(!startfirst)}><Text>{root.title}</Text></TouchableOpacity>
                  <SectionList
                    sections={mySection}
                    renderSectionHeader={renderSectionHeader}
                    renderItem={renderSection}
                  />
                  
                  {mylevel >= 0 ? 
                  (
                    <View>
                      <Text>참인 경우{mylevel}
                        {myStem[mylevel].title}
                        and {callStem}
                      </Text>
                        {/* <SectionList
                        sections = {stemList[]}
                        /> */}
                        <SectionList
                          sections={myStem}
                          renderSectionHeader={renderStemHeader}
                          renderItem={renderStem}
                        />
                      
                    </View>
                  )
                  :
                  (
                    <View>
                      <Text>
                      0인 경우를 포함한 거짓인 경우
                      </Text>
                    </View>
                  )}
                  
                  </View>
                )}
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