import React, {Component, useState} from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import {Button, Modal, View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, Linking, FlatList} from 'react-native';
=======
import {TextInput, Modal, View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, Linking, FlatList, ScrollView} from 'react-native';
>>>>>>> upstream/master
=======
import {TextInput, Modal, View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, Linking, FlatList, ScrollView} from 'react-native';
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'; // width, height
import{Menu, MenuOption, MenuOptions,MenuTrigger, MenuProvider} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/Ionicons';
import TreeView from 'react-native-final-tree-view';

import Cytoscape from 'cytoscape';
import CytoscapeComponent from 'react-cytoscapejs';
import COSEBilkent from 'cytoscape-cose-bilkent';

Cytoscape.use(COSEBilkent);

const ModifyRoadMap = (props, {navigation}) => {
    const [numKey, setnumKey] = useState(0);

    const [Viewstate, setViewstate] = useState(true);

    const [modalVisible, setModalVisible] = useState(false);
    const [modalBooksid, setBooksid] = useState(null);
    const [modalBooksKey, setBooksKey] = useState(null);

<<<<<<< HEAD
<<<<<<< HEAD
=======
    const [secondmodalVisible, setsecondmodalVisible] = useState(false);

>>>>>>> upstream/master
=======
    const [secondmodalVisible, setsecondmodalVisible] = useState(false);

>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
    let roadMapId = props.route.params.roadMapId;
    let roadmap = props.route.params.roadmap;

    const state = {
      triz: [
        {
          key : 0,
          id: 'root',
          label: 'root',
<<<<<<< HEAD
<<<<<<< HEAD
          texts : '뿌리 내용',
=======
          texts : '웹 백엔드',
>>>>>>> upstream/master
=======
          texts : '웹 백엔드',
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
          children: [
            {
              key : 1,
              id: 'child1',
              label: 'child1',
<<<<<<< HEAD
<<<<<<< HEAD
              texts : '줄기 내용',
=======
              texts : 'HTML CSS JS',
>>>>>>> upstream/master
=======
              texts : 'HTML CSS JS',
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
              children: [
                {
                  key : 3,
                  id: 'stem1',
                  label: 'stem1',
<<<<<<< HEAD
<<<<<<< HEAD
                  texts : '가지 내용1',
                  children: [
=======
                  texts : 'Jquery',
                  children: [

>>>>>>> upstream/master
=======
                  texts : 'Jquery',
                  children: [

>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
                    {
                      key : 4,
                      id: 'leaf1',
                      label: 'leaf1',
<<<<<<< HEAD
<<<<<<< HEAD
                      texts : '잎사귀',
                    },
=======
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

>>>>>>> upstream/master
=======
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

>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
                  ],
                },
                {
                  key : 2,
                  id: 'stem2',
                  label: 'stem2',
<<<<<<< HEAD
<<<<<<< HEAD
                  texts : '가지 내용2',
                },
=======
                  texts : 'GITHUB',
                },
=======
                  texts : 'GITHUB',
                },
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4

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

<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
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
<<<<<<< HEAD
<<<<<<< HEAD
        name : ['책1', '책2', '책3']
=======
        name : ['책1', '책2', '책3', '책8989' , '책8989' , '책8989' , '책8989']
>>>>>>> upstream/master
=======
        name : ['책1', '책2', '책3', '책8989' , '책8989' , '책8989' , '책8989']
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
      },
      {
        id : 'child1',
        name : ['책3', '책4', '책5']
      },
      {
        id : 'child2',
        name : ['책12', '책45', '책65']
      },
      {
        id : 'stem1',
        name : ['책09', '책80', '책07']
      },
      {
        id : 'leaf1',
        name : ['책33', '책44', '책55']
      },
    ]
    

    // TreeView + - * 펼치기, 닫기, 단말노드
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

    // LongPress 노드 아이템 보기
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
<<<<<<< HEAD
=======
=======
      // 노드 아이템 수정 뷰
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
    const renderUpdateList = ({item}) =>{
      return(
        <View>
          <TouchableOpacity onPress ={() =>{
            Linking.openURL(bookUrl[0])
          }} style = {{alignItems : "center"}}>
            <Image style = {styles.images}></Image> 
          </TouchableOpacity>
            <TextInput style = {styles.inputstyle} defaultValue={item} inputProps={{ 'aria-label': 'description' }} />
          
        </View>
        
        
      )
    }

    // 모달 수정클릭 이벤트
    const updateModalView = () => {
      setModalVisible(!modalVisible);
      setsecondmodalVisible(!secondmodalVisible);
    }
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4

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
<<<<<<< HEAD
<<<<<<< HEAD
                            <MenuTrigger style = {{margin : 10}}> 
                              <Icon name='ellipsis-vertical'size={30} color="black"></Icon>
                            </MenuTrigger>
                            <MenuOptions>
                              <MenuOption onSelect={() => alert('save')} text='수정'></MenuOption>
                              <MenuOption onSelect={() => alert('delete')} text='삭제'></MenuOption>
                            </MenuOptions>
=======
                            <TouchableOpacity style = {{margin : 10}}><Text style = {{fontWeight : "bold", size : 20}}>SAVE</Text></TouchableOpacity>
>>>>>>> upstream/master
=======
                            <TouchableOpacity style = {{margin : 10}}><Text style = {{fontWeight : "bold", size : 20}}>SAVE</Text></TouchableOpacity>
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
                          </Menu>
                      </View>
                    </View>
                    
                  </View>

                {/* 로드맵 줄 */}
                  
                <View style = {styles.scrolls}>

                  {Viewstate ? 
                      (
<<<<<<< HEAD
<<<<<<< HEAD
=======
                        // 리스트 형식
>>>>>>> upstream/master
=======
                        // 리스트 형식
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
                      <TreeView
                        data={state.triz}
                        renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
                          return (
                            <View style={{
<<<<<<< HEAD
<<<<<<< HEAD
                              flexDirection: 'column',
=======
                              flexDirection: 'row',
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
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
<<<<<<< HEAD
=======
                              flexDirection: 'row',
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
                              <TouchableOpacity onPress = {() => updateModalView()}><Text style = {{size : 30, color : "white", fontWeight : "bold"}}>+</Text></TouchableOpacity>
                              <TouchableOpacity><Icon name='close' size={20} color="white"></Icon></TouchableOpacity>
>>>>>>> upstream/master
=======
                              <TouchableOpacity onPress = {() => updateModalView()}><Text style = {{size : 30, color : "white", fontWeight : "bold"}}>+</Text></TouchableOpacity>
                              <TouchableOpacity><Icon name='close' size={20} color="white"></Icon></TouchableOpacity>
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
                        // 그래프 형식
>>>>>>> upstream/master
=======
                        // 그래프 형식
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
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
<<<<<<< HEAD
<<<<<<< HEAD
                        ]} 
=======
                        ]}  
>>>>>>> upstream/master
=======
                        ]}  
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
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
<<<<<<< HEAD
<<<<<<< HEAD
                            <View style = {{borderColor : "black", borderWidth : 2}}>
                              <Text style = {{fontSize : 18, fontWeight : 'bold', alignSelf : "center"}}>{Books[modalBooksKey].id}</Text>
                              <View>
=======
                            <View style = {{height : hp("30%"), marginTop: 10, marginBottom : 10}}>
                              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                <Icon name='close'size={20} color="#0067A3"></Icon>
                              </TouchableOpacity>
                              <Text style = {{fontSize : 18, fontWeight : 'bold', alignSelf : "center"}}>{Books[modalBooksKey].id}</Text>
                              <ScrollView horizontal = {true}>
>>>>>>> upstream/master
=======
                            <View style = {{height : hp("30%"), marginTop: 10, marginBottom : 10}}>
                              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                <Icon name='close'size={20} color="#0067A3"></Icon>
                              </TouchableOpacity>
                              <Text style = {{fontSize : 18, fontWeight : 'bold', alignSelf : "center"}}>{Books[modalBooksKey].id}</Text>
                              <ScrollView horizontal = {true}>
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
                                <FlatList
                                  data={Books[modalBooksKey].name}
                                  numColumns={3}
                                  renderItem={renderListItem}
                                />
<<<<<<< HEAD
<<<<<<< HEAD
                              </View>
=======
                              </ScrollView>
>>>>>>> upstream/master
=======
                              </ScrollView>
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
                            </View>
                            
                          )
                          :
<<<<<<< HEAD
<<<<<<< HEAD
                          (<Text>modalBooksid 거짓인 경우</Text>)
=======
=======
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
                          (<View style = {{borderColor : "black", borderWidth : 2, marginTop: 10, marginBottom : 10}}>
                            <Icon name='close' size={20} color="#0067A3"></Icon>
                            <Text>modalBooksid 잘못된 접근입니다.</Text>
                            </View>)
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
                          }

                          <View style = {{flexDirection : "row"}}>
                            <TouchableOpacity
                              style={[styles.button, styles.buttonOpen]}
<<<<<<< HEAD
<<<<<<< HEAD
                              onPress={() => setModalVisible(!modalVisible)}
=======
                              onPress={() => updateModalView()}
>>>>>>> upstream/master
=======
                              onPress={() => updateModalView()}
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
                            >
                              <Text style={styles.textStyle}>수정</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                              style={[styles.button, styles.buttonClose]}
<<<<<<< HEAD
<<<<<<< HEAD
                              onPress={() => setModalVisible(!modalVisible)}
=======
>>>>>>> upstream/master
=======
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
                            >
                              <Text style={styles.textStyle}>삭제</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </Modal>

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4

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
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
                </View>  
                
              </View>

                  {/* 수정하기 */}
                  <Text>
                      어떻게 나오는지 확인하기 위한 텍스트 {typeof(data.label)}
                  </Text>
            </View>
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> upstream/master
=======

>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
          </View>
        </SafeAreaView>
        <View>
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
<<<<<<< HEAD
<<<<<<< HEAD
    height : hp("60%"),
=======
    height : hp("85%"),
>>>>>>> upstream/master
=======
    height : hp("85%"),
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
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
<<<<<<< HEAD
<<<<<<< HEAD
    marginTop: 22
=======
    marginTop: 30,
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
  },
  modalView: {
    flexDirection : "column",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
<<<<<<< HEAD
    padding: 10,
=======
    marginTop: 30,
  },
  modalView: {
    flexDirection : "column",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    paddingBottom : 80,
>>>>>>> upstream/master
=======
    paddingBottom : 80,
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
<<<<<<< HEAD
<<<<<<< HEAD
    elevation: 5
=======
    elevation: 5,
>>>>>>> upstream/master
=======
    elevation: 5,
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
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
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
=======
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
  },
  inputstyle : {
    fontSize : 15,
    fontWeight : 'normal',
    textAlign : 'center',
    borderColor : "#696969",
    borderWidth : 1
  },
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 976298f8ad2ca3c4746f8d55d2cc012dd30314e4
});

export default ModifyRoadMap;