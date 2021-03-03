import React, { useState } from "react";
import {StackActions} from "@react-navigation/native";
import {StyleSheet, Text, ScrollView, TouchableOpacity, View, TextInput, SafeAreaView} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';

const SignUp = ({ip,navigation}) => {

  const [inputId, setInputId] = useState([""]);
  const [inputPw, setInputPw] = useState([""]);
  const [inputPwCk, setInputPwCk] = useState([""]);
  const [inputEmail, setInputEmail] = useState([""]);

  const[userId, setUserId] = useState([""]);
  const[userPw, setUserPw] = useState([""]);
  const[userPwCk, setUserPwCk] = useState([""]);
  const[userEmail, setUserEmail] = useState([""]);

  const [Major, setMajor] = useState("");

  const [Work, setWork] = useState([""])

  const writeState = () =>{
    // console.log(inputId, inputPw, inputPwCk, inputEmail, Major[0], Work);
    if(inputId == ""){
      alert("아이디를 입력해 주세요");
    }
    else if(inputPw == ""){
      alert("비밀번호를 입력해 주세요");
    }
    else if(inputPwCk == ""){
      alert("비밀번호 확인을 입력해 주세요");
    }
    else if(inputPw == ""){
      alert("이메일을 입력해 주세요");
    }
    else if(Major == "" || Work == ""){
      alert("추가정보를 입력해 주세요");
    }
    else if(inputPw != inputPwCk){
      alert("비밀번호가 일치하지 않습니다.");
    }
    else {
      register();
    }
  }
//http://localhost:8000/register?userId=a&userPw=a&userEmail=a&work=a
  async function register(){
    try{
      const response = await axios.get("http://"+ip+":8000/register",{
        params : {
          userId : inputId,
          userPw : inputPw,
          userEmail : inputEmail,
          userWork : Work,
          major : Major.join(",")
        }
      });
      
      let result = response.data
      
      if (result == "success") {
        alert("회원가입에 성공하였습니다!");
        navigation.dispatch(
          StackActions.replace('login')
        );
      }
      else if(result == "exist"){
        alert("존재하는 아이디 입니다.");
      }
      else{
        alert("회원가입에 실패하였습니다.");
      }

    }catch(error) {
      console.error(error);
    }
  }

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
                          placeholder={"아이디 입력"}
                          onChangeText = {
                            (inputId) => setInputId(inputId)
                          }/>
                        {/* <TouchableOpacity style = {styles.checkButton}>
                          <Text style = {styles.checkButtonTitle}>
                            중복 확인
                          </Text>
                        </TouchableOpacity> */}
                    </View>
                    <View style={styles.formArea}>
                        <TextInput 
                          style={styles.textForm} 
                          placeholder={"비밀번호 입력"}
                          onChangeText = {
                            (inputPw) => setInputPw(inputPw)
                          }/>
                    </View>
                    <View style={styles.formArea}>
                        <TextInput 
                          style={styles.textForm} 
                          placeholder={"비밀번호 확인"}
                          onChangeText = {
                            (inputPwCk) => setInputPwCk(inputPwCk)
                          }/>
                    </View>
                    <View style={styles.formArea}>
                        <TextInput 
                          style={styles.textForm} 
                          placeholder={"이메일 입력"}
                          onChangeText = {
                            (inputEmail) => setInputEmail(inputEmail)
                          }/>
                        {/* <TouchableOpacity style = {styles.checkButton}>
                          <Text style = {styles.checkButtonTitle}>
                            중복 확인
                          </Text>
                        </TouchableOpacity> */}
                    </View>
            </View>

            <View style = {styles.subTitleArea}>
              <Text style = {styles.subTitle}>추가 정보</Text>
            </View>

            <View style = {{flex : 1, justifyContent : 'center', flexDirection : 'row'}}>

              <DropDownPicker style = {{flex : 1, width : 150, padding : 10}}
                items = {[
                  {label : "사업가", value : 'ceo'},
                  {label : "초등학생", value : 'elementary'},
                  {label : "중학생", value : 'middle'},
                  {label : "고등학생", value : 'high'},
                  {label : "대학생", value : 'college'},
                  {label : "취업준비생", value : 'readyworker'},
                ]}

                containerStyle = {{height : 50, padding : 5}}
                itemStyle ={{
                  justifyContent : 'flex-start'
                }}
                onChangeItem = {item => {
                  setWork(item.value);
                  }
                }
                >
              </DropDownPicker>

              <DropDownPicker style = {{flex : 1, width : 150, padding : 10}}
                items = {[
                  {label : "웹", value : 'web'},
                  {label : "앱", value : 'app'},
                  {label : "인공지능", value : 'ai'},
                  {label : "블록체인", value : 'blockchain'},
                  {label : "보안", value : 'protect'},
                  {label : "빅데이터", value : 'bigdata'},
                  {label : "디자이너", value : 'designer'},
                  {label : "기획", value : 'planner'},
                ]}

                multiple = {true}
                min = {0}
                max = {10} 

                defaultValue = {Major}
                containerStyle = {{height : 50, padding : 5}}
                itemStyle ={{
                  justifyContent : 'flex-start'
                }}
                onChangeItem = {(item) => {
                  setMajor(item);
                }
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
                  onPress = {writeState}>
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
    width: '100%',
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