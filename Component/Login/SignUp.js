import React, { useState } from "react";
import {StackActions} from "@react-navigation/native";
import {StyleSheet, Text, ScrollView, TouchableOpacity, View, TextInput, SafeAreaView} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Picker} from "@react-native-community/picker";
import DropDownPicker from 'react-native-dropdown-picker';

const SignUp = ({navigation}) => {

  const [Major, setMajor] = useState("웹");
  // const [Work, setWork] = useState("사업가");
  let Work;

  return(
    <SafeAreaView style = {styles.container}>
      <ScrollView style={styles.container}>
          <View style={styles.titleArea}>
                      <Text style={styles.title}>LoadMap</Text>
          </View>

          <View style = {styles.subTitleArea}>
              <Text style = {styles.subTitle}>기본 정보</Text>
          </View>

          <View style = {{alignItems : 'center',flex : 1}}>
            <View style = {styles.textInputArea}>
                    <View style={styles.formArea}>
                        <TextInput 
                          style={styles.textForm} 
                          placeholder={"아이디 입력"}/>
                        <TouchableOpacity style = {styles.checkButton}>
                          <Text style = {styles.checkButtonTitle}>
                            중복 확인
                          </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formArea}>
                        <TextInput 
                          style={styles.textForm} 
                          placeholder={"비밀번호 입력"}/>
                    </View>
                    <View style={styles.formArea}>
                        <TextInput 
                          style={styles.textForm} 
                          placeholder={"비밀번호 확인"}/>
                    </View>
                    <View style={styles.formArea}>
                        <TextInput 
                          style={styles.textForm} 
                          placeholder={"이메일 입력"}/>
                        <TouchableOpacity style = {styles.checkButton}>
                          <Text style = {styles.checkButtonTitle}>
                            중복 확인
                          </Text>
                        </TouchableOpacity>
                    </View>
            </View>

            <View style = {styles.subTitleArea}>
              <Text style = {styles.subTitle}>추가 정보</Text>
            </View>

            <View style = {{flex : 1, justifyContent : 'center', flexDirection : 'row'}}>

              <DropDownPicker style = {{flex : 1, width : 150, padding : 10}}
                items = {[
                  {label : "사업가", value : '1'},
                  {label : "초등학생", value : '2'},
                  {label : "중학생", value : '3'},
                  {label : "고등학생", value : '4'},
                  {label : "대학생", value : '5'},
                  {label : "취업준비생", value : '6'},
                ]}

                defaultValue = {Work}
                containerStyle = {{height : 50, padding : 5}}
                itemStyle ={{
                  justifyContent : 'flex-start'
                }}
                onChangeItem = {item => {
                  Work = item;
                  }
                }
                >
              </DropDownPicker>

              <DropDownPicker style = {{flex : 1, width : 150, padding : 10}}
                items = {[
                  {label : "웹", value : '1'},
                  {label : "앱", value : '2'},
                  {label : "인공지능", value : '3'},
                  {label : "블록체인", value : '4'},
                  {label : "보안", value : '5'},
                  {label : "빅데이터", value : '6'},
                  {label : "디자이너", value : '7'},
                  {label : "기획", value : '8'},
                ]}

                multiple = {true}
                min = {0}
                max = {10} 

                defaultValue = {Major}
                containerStyle = {{height : 50, padding : 5}}
                itemStyle ={{
                  justifyContent : 'flex-start'
                }}
                onChangeItem = {item => {
                  setMajor(item);}
                }
                >
              </DropDownPicker>
            </View>

            <View style = {styles.buttonArea}>
              <TouchableOpacity
                  style = {styles.button}
                  onPress = {() => {
                  navigation.dispatch(
                    StackActions.replace('login')
                    )
                  }}>
                  <Text style = {styles.buttonTitle}>취소</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style = {styles.button}
                  onPress = {() => {
                  navigation.dispatch(
                    StackActions.replace('login')
                    )
                  }}>
                  <Text style = {styles.buttonTitle}>회원가입</Text>
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
     titleArea: {
        flex : 1,
        width: '100%',
        padding: wp('10%'),
        alignItems: 'center',
    },
    title: {
        fontSize: wp('10%'),
        fontWeight : 'bold',
    },

    subTitleArea : {
      flex : 1,
      width : 'auto',
      height : 'auto',
      justifyContent : 'center',
      alignItems : 'center'
    },
    subTitle : {
      fontSize : 20,
      fontWeight : 'bold',
    },
    textInputArea : {
      flex : 1,
      width : '100%',
      height : '100%',
      padding : 20,
      justifyContent : 'center',
    },
  formArea: {
    flex : 1,
    width: '100%',
    padding : 10,
    alignItems : 'center',
    flexDirection : 'row'
},
checkButton : {
  backgroundColor: "skyblue",
  width: "20%",
  height: "70%",
  marginLeft : 10,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius : 20,
},
checkButtonTitle: {
  color: 'white',
  fontWeight : 'bold',
},
textForm: {
    borderWidth: 0.5,
    borderColor: '#888',
    width: '60%',
    height: hp('5%'),
    paddingLeft: 5, 
    paddingRight: 5,
},
  buttonArea : {
    flex : 1,
    justifyContent : 'center',
    width: '100%',
    height: hp('5%'),
    flexDirection : 'row',
    marginTop : 130
  },
  button: {
    backgroundColor: "skyblue",
    width: "30%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    margin : 10,
    borderRadius : 20,
  },
  buttonTitle: {
      color: 'white',
      fontWeight : 'bold',
  },
});

export default SignUp;