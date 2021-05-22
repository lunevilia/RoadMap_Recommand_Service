import React, {Component, useState} from 'react';
import {Button, Modal, View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, Linking, FlatList} from 'react-native';

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

    let roadMapId = props.route.params.roadMapId;
    let roadmap = props.route.params.roadmap;

    const state = {
      triz: [
        {
          key : 0,
          id: 'root',
          label: 'root',
          texts : '뿌리 내용',
          children: [
            {
              key : 1,
              id: 'child1',
              label: 'child1',
              texts : '줄기 내용',
              children: [
                {
                  key : 3,
                  id: 'stem1',
                  label: 'stem1',
                  texts : '가지 내용1',
                  children: [
                    {
                      key : 4,
                      id: 'leaf1',
                      label: 'leaf1',
                      texts : '잎사귀',
                    },
                  ],
                },
                {
                  key : 2,
                  id: 'stem2',
                  label: 'stem2',
                  texts : '가지 내용2',
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
        name : ['책1', '책2', '책3']
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
                              <MenuOption onSelect={() => alert('save')} text='수정'></MenuOption>
                              <MenuOption onSelect={() => alert('delete')} text='삭제'></MenuOption>
                            </MenuOptions>
                          </Menu>
                      </View>
                    </View>
                    
                  </View>

                {/* 로드맵 줄 */}
                  
                <View style = {styles.scrolls}>

                  {Viewstate ? 
                      (
                      <TreeView
                        data={state.triz}
                        renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
                          return (
                            <View style={{
                              flexDirection: 'column',
                            }}>
                              <Text
                                style={{
                                  height : 25,
                                  marginLeft: 25 * level,
                                  marginBottom : 10,
                                  marginTop : 3,
                                  fontSize: 20,
                                  color : "black",
                                }}>
                                {getIndicator(isExpanded, hasChildrenNodes)} {node.label}
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
                            <View style = {{borderColor : "black", borderWidth : 2}}>
                              <Text style = {{fontSize : 18, fontWeight : 'bold', alignSelf : "center"}}>{Books[modalBooksKey].id}</Text>
                              <View>
                                <FlatList
                                  data={Books[modalBooksKey].name}
                                  numColumns={3}
                                  renderItem={renderListItem}
                                />
                              </View>
                            </View>
                            
                          )
                          :
                          (<Text>modalBooksid 거짓인 경우</Text>)
                          }

                          <View style = {{flexDirection : "row"}}>
                            <TouchableOpacity
                              style={[styles.button, styles.buttonOpen]}
                              onPress={() => setModalVisible(!modalVisible)}
                            >
                              <Text style={styles.textStyle}>수정</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                              style={[styles.button, styles.buttonClose]}
                              onPress={() => setModalVisible(!modalVisible)}
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
                      어떻게 나오는지 확인하기 위한 텍스트 {typeof(data.label)}
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
    marginTop: 22
  },
  modalView: {
    flexDirection : "column",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
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
  }
});

export default ModifyRoadMap;