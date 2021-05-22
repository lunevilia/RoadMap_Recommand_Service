import React, {Component, useState} from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, SectionList, FlatList, Image, Button, ImageEditor} from 'react-native';
=======
import {Button, TextInput, Modal, View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, Linking, FlatList, ScrollView,Alert} from 'react-native';

>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'; // width, height
import{Menu, MenuOption, MenuOptions,MenuTrigger, MenuProvider} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/Ionicons';
<<<<<<< HEAD
=======
import {Button, TextInput, Modal, View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, Linking, FlatList, ScrollView,Alert} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'; // width, height
import{Menu, MenuOption, MenuOptions,MenuTrigger, MenuProvider} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/Ionicons';
=======
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
import TreeView from 'react-native-final-tree-view';

import Cytoscape from 'cytoscape';
import CytoscapeComponent from 'react-cytoscapejs';
import COSEBilkent from 'cytoscape-cose-bilkent';

Cytoscape.use(COSEBilkent);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4


const RoadMap = (props, {navigation}) => {

  const [numKey, setnumKey] = useState(0);
<<<<<<< HEAD

  const [Viewstate, setViewstate] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalBooksid, setBooksid] = useState(null);
  const [modalBooksKey, setBooksKey] = useState(null);

  const [secondmodalVisible, setsecondmodalVisible] = useState(false);

  let roadMapId = props.route.params.roadMapId;
  let roadmap = props.route.params.roadmap;

  const state = {
    triz: [
      {
        key : 0,
        id: 'root',
        label: 'root',
        texts : '웹 백엔드',
        children: [
          {
            key : 1,
            id: 'child1',
            label: 'child1',
            texts : 'HTML CSS JS',
            children: [
              {
                key : 3,
                id: 'stem1',
                label: 'stem1',
                texts : 'Jquery',
                children: [

                  {
                    key : 4,
                    id: 'leaf1',
                    label: 'leaf1',
                    texts : 'JAVA',
                    children: [
                      {
                        key : 6,
                        id: 'stem1',
                        label: 'stem1',
                        texts : 'Spring',
                      },
                    ],
                  },

                ],
              },
              {
                key : 2,
                id: 'stem2',
                label: 'stem2',
                texts : 'GITHUB',
              },

              {
                key : 5,
                id: 'stem2',
                label: 'stem2',
                texts : 'MySQL',
                children: [
                  {
                    key : 6,
                    id: 'stem1',
                    label: 'stem1',
                    texts : 'MariaDB',
                    children: [
                      {
                        key : 6,
                        id: 'stem1',
                        label: 'stem1',
                        texts : 'REST JSON AUTH',
                      },
                    ],
                  },
                ],
              },
              {
                key : 7,
                id: 'stem2',
                label: 'stem2',
                texts : 'PHP',
                children: [
                  {
                    key : 8,
                    id: 'stem1',
                    label: 'stem1',
                    texts : 'Apache',
                  },
                ],
              },

            ],
          },
        ],
      },
    ],
  };

  
  const data = [
    { data: state.triz[0]},
    { data: state.triz[0].children[0]},
    { data: state.triz[0].children[0].children[0]},
    { data: state.triz[0].children[0].children[1]},
    { data: state.triz[0].children[0].children[0].children[0]},
    { data: { source: 'root', target: 'child1', label: 'Edge from Node1 to Node2' } },
    { data: { source: 'child1', target: 'stem1', label: 'Edge from Node1 to Node2' } },
    { data: { source: 'child1', target: 'stem2', label: 'Edge from Node1 to Node2' } },
    { data: { source: 'stem1', target: 'leaf1', label: 'Edge from Node1 to Node2' } },
 ];

  const [bookUrl, setBookUrl] = useState(["https://www.naver.com"]);
  const [bookSrc, setBookSrc] = useState(["https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg","https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg","https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg","https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg","https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg","https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg","https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg"]);
  const Books = [
    {
      id : 'root',
      name : ['책1', '책2', '책3', '책8989' , '책8989' , '책8989' , '책8989'],
      bookurl : ["https://www.naver.com", "https://www.naver.com", "https://www.naver.com", "https://www.naver.com","https://www.naver.com", "https://www.naver.com", "https://www.naver.com"]
    },
    {
      id : 'child1',
      name : ['책3', '책4', '책5'],
      bookurl : ["https://www.naver.com", "https://www.naver.com", "https://www.naver.com"]
    },
    {
      id : 'child2',
      name : ['책12', '책45', '책65'],
      bookurl : ["https://www.naver.com", "https://www.naver.com", "https://www.naver.com"]
    },
    {
      id : 'stem1',
      name : ['책09', '책80', '책07'],
      bookurl : ["https://www.naver.com", "https://www.naver.com", "https://www.naver.com"]
    },
    {
      id : 'leaf1',
      name : ['책33', '책44', '책55'],
      bookurl : ["https://www.naver.com", "https://www.naver.com", "https://www.naver.com"]
    },
  ]
  
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

  const renderListItem = ({item}) =>{
    // <Text style = {styles.bookmark}>{item}</Text>
    return (
    <TouchableOpacity onPress ={() =>{
      Linking.openURL(bookUrl[0])
    }}>
      <Image style = {styles.images} source = {{uri : bookSrc[0]}}></Image> 
      <Text style = {styles.imageName}>{item}</Text>
    </TouchableOpacity>
    )}

<<<<<<< HEAD
    const [startfirst, setstart] = useState(true);
    const [callStem, setStem] = useState(null);
=======

  const [Viewstate, setViewstate] = useState(true);
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4

  const [modalVisible, setModalVisible] = useState(false);
  const [modaldelete, setmodaldelete] = useState(false);
  const [modalBooksid, setBooksid] = useState(null);
  const [modalBooksKey, setBooksKey] = useState(null);

  const [secondmodalVisible, setsecondmodalVisible] = useState(false);

  let roadMapId = props.route.params.roadMapId;
  let roadmap = props.route.params.roadmap;

  const state = {
    triz: [
      {
        key : 0,
        id: 'root',
        label: 'root',
        texts : '웹 백엔드',
        children: [
          {
            key : 1,
            id: 'child1',
            label: 'child1',
            texts : 'HTML CSS JS',
            children: [
              {
                key : 3,
                id: 'stem1',
                label: 'stem1',
                texts : 'Jquery',
                children: [

                  {
                    key : 4,
                    id: 'leaf1',
                    label: 'leaf1',
                    texts : 'JAVA',
                    children: [
                      {
                        key : 6,
                        id: 'flower1',
                        label: 'flower1',
                        texts : 'Spring',
                      },
                    ],
                  },

                ],
              },
              {
                key : 2,
                id: 'stem2',
                label: 'stem2',
                texts : 'GITHUB',
              },

              {
                key : 5,
                id: 'stem3',
                label: 'stem3',
                texts : 'MySQL',
                children: [
                  {
                    key : 6,
                    id: 'leaf2',
                    label: 'leaf2',
                    texts : 'MariaDB',
                    children: [
                      {
                        key : 6,
                        id: 'flower2',
                        label: 'flower2',
                        texts : 'REST JSON AUTH',
                      },
                    ],
                  },
                ],
              },
              {
                key : 7,
                id: 'stem4',
                label: 'stem4',
                texts : 'PHP',
                children: [
                  {
                    key : 8,
                    id: 'leaf3',
                    label: 'leaf3',
                    texts : 'Apache',
                  },
                ],
              },

            ],
          },
        ],
      },
<<<<<<< HEAD
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
=======
    ],
  };
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4

  
  const data = [
    { data: state.triz[0]},
    { data: state.triz[0].children[0]},
    { data: state.triz[0].children[0].children[0]},
    { data: state.triz[0].children[0].children[1]},
    { data: state.triz[0].children[0].children[0].children[0]},
    { data: { source: 'root', target: 'child1', label: 'Edge from Node1 to Node2' } },
    { data: { source: 'child1', target: 'stem1', label: 'Edge from Node1 to Node2' } },
    { data: { source: 'child1', target: 'stem2', label: 'Edge from Node1 to Node2' } },
    { data: { source: 'stem1', target: 'leaf1', label: 'Edge from Node1 to Node2' } },
 ];

  const [bookUrl, setBookUrl] = useState(["https://www.naver.com"]);
  const [bookSrc, setBookSrc] = useState(["https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg","https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg","https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg","https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg","https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg","https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg","https://bookthumb-phinf.pstatic.net/cover/166/834/16683411.jpg"]);
  const Books = [
    {
      id : 'root',
      name : ['책1', '책2', '책3', '책8989' , '책8989' , '책8989' , '책8989'],
      bookurl : ["https://www.naver.com", "https://www.naver.com", "https://www.naver.com", "https://www.naver.com","https://www.naver.com", "https://www.naver.com", "https://www.naver.com"]
    },
    {
      id : 'child1',
      name : ['책3', '책4', '책5'],
      bookurl : ["https://www.naver.com", "https://www.naver.com", "https://www.naver.com"]
    },
    {
      id : 'child2',
      name : ['책12', '책45', '책65'],
      bookurl : ["https://www.naver.com", "https://www.naver.com", "https://www.naver.com"]
    },
    {
      id : 'stem1',
      name : ['책09', '책80', '책07'],
      bookurl : ["https://www.naver.com", "https://www.naver.com", "https://www.naver.com"]
    },
    {
      id : 'leaf1',
      name : ['책33', '책44', '책55'],
      bookurl : ["https://www.naver.com", "https://www.naver.com", "https://www.naver.com"]
    },
  ]
  
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

  const renderListItem = ({item}) =>{
    // <Text style = {styles.bookmark}>{item}</Text>
    return (
    <TouchableOpacity onPress ={() =>{
      Linking.openURL(bookUrl[0])
    }}>
      <Image style = {styles.images} source = {{uri : bookSrc[0]}}></Image> 
      <Text style = {styles.imageName}>{item}</Text>
    </TouchableOpacity>
    )}

  const renderUpdateList = ({item}) =>{
    return(
      <View>
          <TouchableOpacity onPress ={() =>{
          }} style = {{alignItems : "center"}}>
            <Image style = {styles.images} source = {{uri : bookSrc[0]}}></Image>
          </TouchableOpacity>
            <TextInput style = {styles.inputstyle} defaultValue={item} inputProps={{ 'aria-label': 'description' }} />
            <TextInput style = {styles.inputstyle} defaultValue={item.bookUrl} inputProps={{ 'aria-label': 'description' }} />
        </View>
    )
  }



<<<<<<< HEAD
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
=======
  // 모달 수정클릭 이벤트
  const updateModalView = () => {
    setModalVisible(!modalVisible);
    setsecondmodalVisible(!secondmodalVisible);
  }

  // 삭제하기 확인 modal click 이벤트
  const deleteRoadMap = () =>{
    setmodaldelete(!modaldelete);
  }

  return(
    <MenuProvider>
      <SafeAreaView style ={styles.container}>
        <View style = {styles.container}>
            <Text style = {styles.Texts}>
                {roadmap}
            </Text>

          <View style = {styles.roadview}>

            <View style = {styles.top}>
        
              {/* 뷰 형식 선택 && 더보기 */}
                <View style = {{flexDirection : 'column', flex : 1}}>
                  
                  <View style = {{flex : 1, flexDirection : 'row', justifyContent: 'space-between'}}>
                    
                    {/* 뷰 선택 */}
                    {Viewstate ? 
                    (
                    <View style = {{flex : 1.5, justifyContent : 'center', alignItems : 'center', flexDirection : 'row'}}>
                      <TouchableOpacity style = {styles.clickicons}>
                        <Icon name='list'size={25} color="white"></Icon> 
                      </TouchableOpacity>
                      <TouchableOpacity style = {styles.nonclickicons} onPress = {() => {setViewstate(!Viewstate)}}>
                        <Icon name='share-social-outline'size={25} color="#0067A3"></Icon> 
                      </TouchableOpacity>
                    </View>
                    ) 
                    : 
                    (
                    <View style = {{flex : 1.5, justifyContent : 'center', alignItems : 'center', flexDirection : 'row'}}>
                      <TouchableOpacity style = {styles.nonclickicons} onPress = {() => {setViewstate(!Viewstate)}}>
                        <Icon name='list'size={25} color="#0067A3"></Icon> 
                      </TouchableOpacity>
                      <TouchableOpacity style = {styles.clickicons}>
                        <Icon name='share-social-outline'size={25} color="white"></Icon> 
                      </TouchableOpacity>
                    </View>
                    )}
                    


                    <View style = {{flex : 5, justifyContent : 'center', alignItems : 'center'}}>
                    </View>

                    {/* 더보기 */}
                    <View style = {{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                        <Menu>
                          <MenuTrigger style = {{margin : 10}}> 
                            <Icon name='ellipsis-vertical'size={30} color="black"></Icon>
                          </MenuTrigger>
                          <MenuOptions>
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
                          <MenuOptions><TouchableOpacity style = {[styles.menuText]} onPress = {() => {
                            props.navigation.navigate("ModifyRoadMap", {roadMapId : roadMapId, roadmap : roadmap})
                          }}><Text>수정</Text></TouchableOpacity></MenuOptions>

                          <MenuOptions><TouchableOpacity style = {[styles.menuText]} onPress={deleteRoadmap}>
                            <Text>삭제</Text>
                            </TouchableOpacity></MenuOptions>
                          </MenuOptions>
                        </Menu>
                    </View>
                  </View>
                  
                </View>

              {/* 로드맵 줄 */}
                
              <View style = {styles.scrolls}>

                {Viewstate ? 
                    (
                      // 리스트 형식
                    <TreeView
                      data={state.triz}
                      renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
                        return (
                          <View style={{
                            flexDirection: 'column',
                          }}>
                            <Text
                              style={{
                                height : 20 ,
                                marginLeft: 25 * level,
                                marginTop : 3,
                                fontSize: 15,
                                color : "black",
                              }}>
                              {getIndicator(isExpanded, hasChildrenNodes)} {node.texts}
                            </Text>
                          </View>
                        )
                      }}

                      onNodeLongPress={({node, level})=> {
                        setBooksKey(node.key);
                        setBooksid(node.id);
                        setModalVisible(true);
                      }}
                    />
                    ) 
                    : 
                    (
                      // 그래프 형식
                      <CytoscapeComponent stylesheet={[
                        {
                          selector: 'node',
                          style: {
                            width: 20,
                            height: 20,
                          }
                        },
                        
                        {
                          selector: 'edge',
                          style: {
                            width: 3
                          }
                        }
                      ]}  
                      elements={data} 
                      minZoom={0.5} maxZoom={5} 
                      style={ { width : wp("80%"), height : hp("80%"), } } 
                      layout = {{
                        name: 'cose-bilkent',
                      }}
                      />
                    )}
                  

                  {/* Modal 모달 부분 */}
                  <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      setModalVisible(!modalVisible)
                    }}
                  >
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        {modalBooksid ?
                        (
                          <View style = {{height : hp("30%"), marginTop: 10, marginBottom : 10}}>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                              <Icon name='close'size={20} color="#0067A3"></Icon>
                            </TouchableOpacity>
                            <Text style = {{fontSize : 18, fontWeight : 'bold', alignSelf : "center"}}>{Books[modalBooksKey].id}</Text>
                            <ScrollView horizontal = {true}>
                              <FlatList
                                data={Books[modalBooksKey].name}
                                numColumns={3}
                                renderItem={renderListItem}
                              />
                            </ScrollView>
                          </View>
                          
                        )
                        :
                        (
                        <View style = {{borderColor : "black", borderWidth : 2, marginTop: 10, marginBottom : 10}}>
                          <Icon name='close' size={20} color="#0067A3"></Icon>
                          <Text>modalBooksid 잘못된 접근입니다.</Text>
                          </View>)
                        }

                        <View style = {{flexDirection : "row"}}>
                          <TouchableOpacity
                            style={[styles.button, styles.buttonOpen]}
                            onPress={() => updateModalView()}
                          >
                            <Text style={styles.textStyle}>수정</Text>
                          </TouchableOpacity>

                          <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                          >
                            <Text style={styles.textStyle}>삭제</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </Modal>


                  {/* 수정하기 두번째 modal */}
                  <Modal
                    animationType="fade"
                    transparent={true}
                    visible={secondmodalVisible}
                    onRequestClose={() => {
                      setsecondmodalVisible(!secondmodalVisible)
                    }}
                  >
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        {modalBooksid ?
                        (
                          <View style = {{height : hp("30%"), marginTop: 10, marginBottom : 10}}>
                            <TouchableOpacity onPress={() => updateModalView()}>
                              <Icon name='close'size={20} color="#0067A3"></Icon>
                            </TouchableOpacity>
                            <TextInput style = {styles.inputstyle} defaultValue={Books[modalBooksKey].id} inputProps={{ 'aria-label': 'description' }} />
                            <ScrollView horizontal = {true}>
                              <FlatList
                                data={Books[modalBooksKey].name}
                                numColumns={3}
                                renderItem={renderUpdateList}
                              />
                            </ScrollView>
                          </View>
                        )
                        :
                        (<Text>modalBooksid 거짓인 경우</Text>)
                        }

                        <View style = {{flexDirection : "row"}}>
                          <TouchableOpacity
                            style={[styles.button, styles.buttonOpen]}
                            onPress={() => updateModalView()}
                          >
                            <Text style={styles.textStyle}>확인</Text>
                          </TouchableOpacity>

                          <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                          >
                            <Text style={styles.textStyle}>삭제</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </Modal>


                  {/* 삭제(delete)확인 모달 */}
                  <modal animationType="fade"
                    transparent={true}
                    visible={modaldelete}
                    onRequestClose={() => {
                      setmodaldelete(!modaldelete)
                    }}>

                  </modal>
              </View>  
              
            </View>

                {/* 수정하기 */}
                <Text>
                    어떻게 나오는지 확인하기 위한 텍스트
                </Text>
          </View>

<<<<<<< HEAD
    
=======
  const renderUpdateList = ({item}) =>{
    return(
      <View>
          <TouchableOpacity onPress ={() =>{
          }} style = {{alignItems : "center"}}>
            <Image style = {styles.images} source = {{uri : bookSrc[0]}}></Image>
          </TouchableOpacity>
            <TextInput style = {styles.inputstyle} defaultValue={item} inputProps={{ 'aria-label': 'description' }} />
            <TextInput style = {styles.inputstyle} defaultValue={item.bookUrl} inputProps={{ 'aria-label': 'description' }} />
        </View>
    )
  }



  // 모달 수정클릭 이벤트
  const updateModalView = () => {
    setModalVisible(!modalVisible);
    setsecondmodalVisible(!secondmodalVisible);
  }

  // 삭제하기 확인 alert
  const createTwoButtonAlert = () =>
    Alert.alert(
      "삭제하시겠습니까?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

  return(
    <MenuProvider>
      <SafeAreaView style ={styles.container}>
        <View style = {styles.container}>
            <Text style = {styles.Texts}>
                {roadmap}
            </Text>

          <View style = {styles.roadview}>

            <View style = {styles.top}>
        
              {/* 뷰 형식 선택 && 더보기 */}
                <View style = {{flexDirection : 'column', flex : 1}}>
                  <View style = {{flex : 1, flexDirection : 'row', justifyContent: 'space-between'}}>
                    {/* 뷰 선택 */}
                    {Viewstate ? 
                    (
                    <View style = {{flex : 1.5, justifyContent : 'center', alignItems : 'center', flexDirection : 'row'}}>
                      <TouchableOpacity style = {styles.clickicons}>
                        <Icon name='list'size={25} color="white"></Icon> 
                      </TouchableOpacity>
                      <TouchableOpacity style = {styles.nonclickicons} onPress = {() => {setViewstate(!Viewstate)}}>
                        <Icon name='share-social-outline'size={25} color="#0067A3"></Icon> 
                      </TouchableOpacity>
                    </View>
                    ) 
                    : 
                    (
                    <View style = {{flex : 1.5, justifyContent : 'center', alignItems : 'center', flexDirection : 'row'}}>
                      <TouchableOpacity style = {styles.nonclickicons} onPress = {() => {setViewstate(!Viewstate)}}>
                        <Icon name='list'size={25} color="#0067A3"></Icon> 
                      </TouchableOpacity>
                      <TouchableOpacity style = {styles.clickicons}>
                        <Icon name='share-social-outline'size={25} color="white"></Icon> 
                      </TouchableOpacity>
                    </View>
                    )}
                    


                    <View style = {{flex : 5, justifyContent : 'center', alignItems : 'center'}}>
                    </View>

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

                          <MenuOptions><TouchableOpacity style = {[styles.menuText]} onPress={createTwoButtonAlert}>
                            <Text>삭제</Text>
                            </TouchableOpacity></MenuOptions>
                          </MenuOptions>
                        </Menu>
                    </View>
                  </View>
                  
                </View>

              {/* 로드맵 줄 */}
                
              <View style = {styles.scrolls}>

                {Viewstate ? 
                    (
                      // 리스트 형식
                    <TreeView
                      data={state.triz}
                      renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
                        return (
                          <View style={{
                            flexDirection: 'column',
                          }}>
                            <Text
                              style={{
                                height : 20 ,
                                marginLeft: 25 * level,
                                marginTop : 3,
                                fontSize: 15,
                                color : "black",
                              }}>
                              {getIndicator(isExpanded, hasChildrenNodes)} {node.texts}
                            </Text>
                          </View>
                        )
                      }}

                      onNodeLongPress={({node, level})=> {
                        setBooksKey(node.key);
                        setBooksid(node.id);
                        setModalVisible(true);
                      }}
                    />
                    ) 
                    : 
                    (
                      // 그래프 형식
                      <CytoscapeComponent stylesheet={[
                        {
                          selector: 'node',
                          style: {
                            width: 20,
                            height: 20,
                          }
                        },
                        
                        {
                          selector: 'edge',
                          style: {
                            width: 3
                          }
                        }
                      ]}  
                      elements={data} 
                      minZoom={0.5} maxZoom={5} 
                      style={ { width : wp("80%"), height : hp("80%"), } } 
                      layout = {{
                        name: 'cose-bilkent',
                      }}
                      />
                    )}
                  

                  {/* Modal 모달 부분 */}
                  <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      setModalVisible(!modalVisible)
                    }}
                  >
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        {modalBooksid ?
                        (
                          <View style = {{height : hp("30%"), marginTop: 10, marginBottom : 10}}>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                              <Icon name='close'size={20} color="#0067A3"></Icon>
                            </TouchableOpacity>
                            <Text style = {{fontSize : 18, fontWeight : 'bold', alignSelf : "center"}}>{Books[modalBooksKey].id}</Text>
                            <ScrollView horizontal = {true}>
                              <FlatList
                                data={Books[modalBooksKey].name}
                                numColumns={3}
                                renderItem={renderListItem}
                              />
                            </ScrollView>
                          </View>
                          
                        )
                        :
                        (
                        <View style = {{borderColor : "black", borderWidth : 2, marginTop: 10, marginBottom : 10}}>
                          <Icon name='close' size={20} color="#0067A3"></Icon>
                          <Text>modalBooksid 잘못된 접근입니다.</Text>
                          </View>)
                        }

                        <View style = {{flexDirection : "row"}}>
                          <TouchableOpacity
                            style={[styles.button, styles.buttonOpen]}
                            onPress={() => updateModalView()}
                          >
                            <Text style={styles.textStyle}>수정</Text>
                          </TouchableOpacity>

                          <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                          >
                            <Text style={styles.textStyle}>삭제</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </Modal>


                  {/* 수정하기 두번째 modal */}
                  <Modal
                    animationType="fade"
                    transparent={true}
                    visible={secondmodalVisible}
                    onRequestClose={() => {
                      setsecondmodalVisible(!secondmodalVisible)
                    }}
                  >
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        {modalBooksid ?
                        (
                          <View style = {{height : hp("30%"), marginTop: 10, marginBottom : 10}}>
                            <TouchableOpacity onPress={() => updateModalView()}>
                              <Icon name='close'size={20} color="#0067A3"></Icon>
                            </TouchableOpacity>
                            <TextInput style = {styles.inputstyle} defaultValue={Books[modalBooksKey].id} inputProps={{ 'aria-label': 'description' }} />
                            <ScrollView horizontal = {true}>
                              <FlatList
                                data={Books[modalBooksKey].name}
                                numColumns={3}
                                renderItem={renderUpdateList}
                              />
                            </ScrollView>
                          </View>
                        )
                        :
                        (<Text>modalBooksid 거짓인 경우</Text>)
                        }

                        <View style = {{flexDirection : "row"}}>
                          <TouchableOpacity
                            style={[styles.button, styles.buttonOpen]}
                            onPress={() => updateModalView()}
                          >
                            <Text style={styles.textStyle}>확인</Text>
                          </TouchableOpacity>

                          <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                          >
                            <Text style={styles.textStyle}>삭제</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </Modal>
              </View>  
              
            </View>

                {/* 수정하기 */}
                <Text>
                    어떻게 나오는지 확인하기 위한 텍스트
                </Text>
          </View>

=======
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
        </View>
      </SafeAreaView>
      <View>
      </View>
    </MenuProvider>

  );
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
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
<<<<<<< HEAD
<<<<<<< HEAD
    height : hp("75%"),
    width : wp("90%"),
    backgroundColor : "#BFC8D7",
    borderRadius : 15,
=======
    height : hp("85%"),
    width : wp("90%"),
    backgroundColor : "#BFC8D7",
=======
    height : hp("85%"),
    width : wp("90%"),
    backgroundColor : "#BFC8D7",
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
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
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
  },
  Texts : {
    fontSize : 20,
    marginBottom : 10,
    marginTop : 10
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#2196F3",
    marginRight : 10
  },
  buttonClose: {
    backgroundColor: "#f95965",
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
  top : {
    flex : 1,
  },
  scrolls : {
    flex : 9, 
    justifyContent : 'center', 
    alignItems : 'center',

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 30,
  },
  modalView: {
    flexDirection : "column",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    paddingBottom : 80,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  bookmark : {
    alignItems: "center",
    fontSize : 15,
    width : 40,
    height : 60,
    borderColor : "black",
    borderWidth : 1,
    margin : 20,
    textAlign : "center"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  images : {
    height : 150,
    width : 90,
    margin : 10,
    borderColor : 'lightgray',
    borderWidth : 1
  },
  imageName : {
    fontSize : 15,
    fontWeight : 'normal',
    textAlign : 'center',
  },
  clickicons : {
    backgroundColor : "#696969",
    borderColor : "black",
    borderWidth : 1
  },
  nonclickicons : {
    backgroundColor : "white",
    borderColor : "black",
    borderWidth : 1
  },
  inputstyle : {
    fontSize : 15,
    fontWeight : 'normal',
    textAlign : 'center',
    borderColor : "#696969",
    borderWidth : 1
  },
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
  menuText : {
    fontSize : 12,
    marginTop : 2,
    marginBottom : 2,
    marginLeft : 5
<<<<<<< HEAD
  },
  modifyView : {
    backgroundColor : "#909FA6",
    height : hp("20%"),
    width : wp("90%"),
    borderRadius : 15,
=======
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#2196F3",
    marginRight : 10
  },
  buttonClose: {
    backgroundColor: "#f95965",
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
  top : {
    flex : 1,
  },
  scrolls : {
    flex : 9, 
    justifyContent : 'center', 
    alignItems : 'center',

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 30,
  },
  modalView: {
    flexDirection : "column",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    paddingBottom : 80,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  bookmark : {
    alignItems: "center",
    fontSize : 15,
    width : 40,
    height : 60,
    borderColor : "black",
    borderWidth : 1,
    margin : 20,
    textAlign : "center"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  images : {
    height : 150,
    width : 90,
    margin : 10,
    borderColor : 'lightgray',
    borderWidth : 1
  },
  imageName : {
    fontSize : 15,
    fontWeight : 'normal',
    textAlign : 'center',
  },
  clickicons : {
    backgroundColor : "#696969",
    borderColor : "black",
    borderWidth : 1
  },
  nonclickicons : {
    backgroundColor : "white",
    borderColor : "black",
    borderWidth : 1
  },
  inputstyle : {
    fontSize : 15,
    fontWeight : 'normal',
    textAlign : 'center',
    borderColor : "#696969",
    borderWidth : 1
  },
  menuText : {
    fontSize : 12,
    marginTop : 2,
    marginBottom : 2,
    marginLeft : 5
>>>>>>> upstream/master
=======
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
  }
});

export default RoadMap;