import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'; // width, height
import{Menu, MenuOption, MenuOptions,MenuTrigger, MenuProvider} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/Ionicons';
import TreeView from 'react-native-final-tree-view';

const ModifyRoadMap = (props, {navigation}) => {

    let roadMapId = props.route.params.roadMapId;
    let roadmap = props.route.params.roadmap;

    const state = {
      data: [
        {
          id: 'root',
          name: 'root',
          texts : '뿌리 내용',
          children: [
            {
              id: 'child1',
              name: 'child1',
              texts : '뿌리 내용',
              children: [
                {
                  id: 'child11',
                  name: 'child11',
                  texts : '뿌리 내용',
                  children: [
                    {
                      id: 'child111',
                      name: 'child111',
                      texts : '뿌리 내용',
                    },
                  ],
                },
                {
                  id: 'child12',
                  name: 'child12',
                  texts : '뿌리 내용',
                },
              ],
            },
          ],
        },
      ],
    };
    
    const getIndicator = (isExpanded, hasChildrenNodes) => {
      if (!hasChildrenNodes) {
        //노드가 더이상 없을 경우
        return '*';
      } else if (isExpanded) {
        //노드가 있고, 펼친 상태
        return '-';
      } else {
        //노드가 있는 경우
        return '+';
      }
    };

    // const extractKey = ({id}) => id;

    // const root = [
    //   {
    //     id: 0,
    //     title: '응용프로그램',
    //     text : "전사적 지원",
    //     Trunk: [
    //       {id: 0, text: 'View'},
    //       {id: 1, text: 'Text'},
    //       {id: 2, text: 'Image'},
    //     ],
    //     renderItem: ({item}) => {
    //       return (
    //         <Text style={styles.row}>
    //           {item.text}
    //         </Text>
    //       )
    //     }
    //   },
    //   {
    //     id: 1,
    //     title: 'ERP',
    //     text : "각종 응용분야의 컴퓨터 소프트웨어를 설계하고 개발한다.",
    //     Trunk: [
    //       {id: 3, text: 'ScrollView'},
    //       {id: 4, text: 'ListView'},
    //     ],
    //     renderItem: ({item}) => {
    //       return (
    //         <Text style={styles.rowDark}>
    //           {item.text}
    //         </Text>
    //       )
    //     }
    //   }
    // ]

    // const renderSectionHeader = ({root}) => {
    //   return (
    //     <Text style={styles.header}>
    //       {root.title}
    //     </Text>
    //   )
    // }


    return(
      <MenuProvider>
        <SafeAreaView style ={styles.container}>
          <View style = {styles.container}>
              <Text style = {styles.Texts}>
                  {roadmap} 
              </Text>

            <View style = {styles.roadview}>

              <View style = {styles.top}>
          
                {/* 더보기 */}
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
                  
                  <View style = {styles.scrolls}>
                    <TreeView
                      data={state.data}
                      renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
                        return (
                          <View style={{
                            flexDirection: 'row',
                          }}>
                            <Text
                              style={{
                                marginLeft: 25 * level,
                                fontSize: 18,
                                backgroundColor : "red",
                                color : "white",
                                margin : 3,
                                textAlignVertical : 'center'
                              }}>
                              {getIndicator(isExpanded, hasChildrenNodes)} {node.name}
                            </Text>
                          </View>
                        );
                      }}

                      onNodeLongPress={({node, level}) => alert(node.texts)}
                    />

                      {/* <SectionList
                        style={styles.container}
                        sections={root}
                        renderSectionHeader={renderSectionHeader}
                        keyExtractor={extractKey}
                      /> */}

                </View>  
                
              </View>

                  {/* 수정하기 */}
                  <Text>
                      어떻게 나오는지 확인하기 위한 텍스트
                  </Text>
            </View>
            <View style = {styles.EditView}>
              <TouchableOpacity style = {styles.EditItems}>
                  <Image style={styles.image} source={require('../../img/circle-node.png')} />
                </TouchableOpacity>

                <TouchableOpacity style = {styles.EditItems}>
                  <Image style={styles.image} source={require('../../img/line.png')} />
                </TouchableOpacity>

                <TouchableOpacity style = {styles.EditItems}>
                  <Image style={styles.image} source={require('../../img/view-details.png')} />
                </TouchableOpacity>

                <TouchableOpacity style = {styles.EditItems}>
                  <Image style={styles.image} source={require('../../img/delete.png')} />
                </TouchableOpacity>
                
            </View>
          </View>
        </SafeAreaView>
        <View>
          safe AreaView 다음 View
        </View>
      </MenuProvider>

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
    height : hp("60%"),
    width : wp("90%"),
    backgroundColor : "#BFC8D7",
    elevation : 3,
    margin : 5
  },
  EditView : {
    flex: 1,
    height : hp("20%"),
    width : wp("90%"),
    borderColor : "#909FA6",
    borderWidth : 10,
    borderRadius : 25,
    marginTop : 5,
    flexDirection : "row",
    alignItems : "center",
    paddingHorizontal : 10
  },
  Texts : {
    fontSize : 20,
    marginBottom : 10,
    marginTop : 10
  },
  circle : {
    width : 50,
    height : 50,
    borderRadius : 25,
    marginRight : 20,
    marginLeft : 10,
    borderWidth : 3,
    borderColor : "#F23657",
  },
  image:{
    marginTop: 20 ,
    marginBottom : 20,
    marginLeft: 25,
    width: 50,
    height: 50,
  },
  EditItems : {
    justifyContent : "space-between",
    flexDirection : "row",
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
  rowDark: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'steelblue',
  },
  header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'darkblue',
    color: 'white',
    fontWeight: 'bold',
  },
  mindmaps : {
    height : hp("55%"),
    width: wp("80%"),
  },
  top : {
    flex : 1,
  },
  scrolls : {
    flex : 9, 
    justifyContent : 'center', 
    alignItems : 'center',
     backgroundColor : 'white'
  },
});

export default ModifyRoadMap;