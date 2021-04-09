import React, { useState } from "react";
import {StackActions} from "@react-navigation/native";
import {StyleSheet, Text, ScrollView, TouchableOpacity, View, TextInput, SafeAreaView} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const SignUp = ({navigation}) => {

  const [inputUserName, setInputUserName] = useState([""]);
  const [inputId, setInputId] = useState([""]);
  const [inputPw, setInputPw] = useState([""]);
  const [inputPwCk, setInputPwCk] = useState([""]);
  const [inputEmail, setInputEmail] = useState([""]);
  const [inputUserPhone, setInputUserPhone] = useState([""]);
  const [inputUserAge, setInputUserAge] = useState([""]);

  const [userArea, setUserArea] = useState([""]);
  const [userInterest, setUserInterest] = useState("");
  const [userJob, setUserJob] = useState([""]);
  const [userSex, setUserSex] = useState([""]);

// App.js ip 받아오기
  const [ip, setIp] = useState();
  AsyncStorage.getItem("ip").then((value) =>{
    setIp(value);
  });

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
    else if(inputEmail == ""){
      alert("이메일을 입력해 주세요");
    }
    else if (inputUserAge == ""){
      alert("나이를 입력해 주세요");
    }
    else if (inputUserPhone == ""){
      alert("휴대폰번호를 입력해 주세요");
    }
    else if (userArea == ""){
      alert("지역을 선택해 주세요");
    }
    else if (userSex==""){
      alelrt("성별을 선택해 주세요")
    }
    else if(userJob == "" || userInterest == ""){
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
      const response = await axios.get("http://"+ip+":8080/register",{
        params : {
          userName : inputUserName,
          userId : inputId,
          userPw : inputPw,
          userAge : inputUserAge,
          userArea : userArea,
          userJob : userJob,
          userInterest : userInterest,
          userEmail : inputEmail,
          userPhone : inputUserPhone,
          userSex : userSex
        }
      });
      
      let result = response.data
      
      if (result.result == "success") {
        alert("회원가입에 성공하였습니다!");
        navigation.dispatch(
          StackActions.replace('login')
        );
      }
      else if(result.result == "exist"){
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
                          placeholder={"이름 입력"}
                          onChangeText = {
                            (inputUserName) => setInputUserName(inputUserName)
                          }/>
                    </View>
                    <View style={styles.formArea}>
                        <TextInput 
                          style={styles.textForm} 
                          placeholder={"아이디 입력"}
                          onChangeText = {
                            (inputId) => setInputId(inputId)
                          }/>
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
                          placeholder={"이메일 입력 ( ex@example.com )"}
                          onChangeText = {
                            (inputEmail) => setInputEmail(inputEmail)
                          }/>
                    </View>
                    <View style={styles.formArea}>
                        <TextInput 
                          style={styles.textForm} 
                          placeholder={"전화번호 입력 ( 010-1234-5678 )"}
                          onChangeText = {
                            (inputUserPhone) => setInputUserPhone(inputUserPhone)
                          }/>
                    </View>
                    <View style={styles.formArea}>
                        <TextInput 
                          style={styles.textForm} 
                          placeholder={"나이 입력"}
                          onChangeText = {
                            (inputUserAge) => setInputUserAge(inputUserAge)
                          }/>
                    </View>
                    <View style = {{padding : 10,flexDirection:'row', justifyContent : 'left', alignItems : 'center'}}>

                          <Text style = {{fontSize : 20, fontWeight : 'bold'}}>
                            지역 : 
                          </Text>

                      <DropDownPicker style = {{flex : 1, width : 150, padding : 10}}
                        items = {[
                          {label : "강원도", value : '강원도'},
                          {label : "경기도", value : '경기도'},
                          {label : "서울특별시", value : '서울특별시'},
                          {label : "충청북도", value : '충청북도'},
                          {label : "충청남도", value : '충청남도'},
                          {label : "경상북도", value : '경상북도'},
                          {label : "경상남도", value : '경상남도'},
                          {label : "전라북도", value : '전라북도'},
                          {label : "전라남도", value : '전라남도'},
                          {label : "제주특별자치도", value : '제주특별자치도'},
                        ]}

                        containerStyle = {{height : 50, padding : 5}}
                        itemStyle ={{
                          justifyContent : 'flex-start',
                          position : 'relative'
                        }}
                        onChangeItem = {(item) => {
                          setUserArea(item.value);
                        }
                        }
                        >
                      </DropDownPicker>
                    </View>
                    <View style = {{padding : 10,flexDirection:'row', justifyContent : 'left', alignItems : 'center'}}>

                    <Text style = {{fontSize : 20, fontWeight : 'bold'}}>
                      성별 : 
                    </Text>

                    <DropDownPicker style = {{flex : 1, width : 150, padding : 10}}
                    items = {[
                    {label : "남자", value : '남'},
                    {label : "여자", value : '여'},
                    ]}

                    containerStyle = {{height : 50, padding : 5}}
                    itemStyle ={{
                    justifyContent : 'flex-start',
                    position : 'relative'
                    }}
                    onChangeItem = {(item) => {
                    setUserSex(item.value);
                    }
                    }
                    >
                    </DropDownPicker>
                    </View>
            </View>

            <View style = {styles.subTitleArea}>
              <Text style = {styles.subTitle}>추가 정보</Text>
            </View>

            <View style = {{flex : 1, justifyContent : 'left', alignItems : 'center'}}>
              <View style = {{padding : 10,flexDirection:'row', justifyContent : 'left', alignItems : 'center'}}>

                  <Text style = {{fontSize : 20, fontWeight : 'bold'}}>
                    직업 : 
                  </Text>
              
              <DropDownPicker style = {{flex : 1, width : 150, padding : 10}}
                items = {[
                  {label : "DBA", value : 'DBA'},
                  {label : "High-Level 개발자", value : 'High-Level 개발자'},
                  {label : "Low-Level 개발자", value : 'Low-Level 개발자'},
                  {label : "게임 개발자", value : '게임 개발자'},
                  {label : "그래픽 개발자", value : '그래픽 개발자'},
                  {label : "네트워크 관리자", value : '네트워크 관리자'},
                  {label : "대학생", value : '대학생'},
                  {label : "데브옵스개발자", value : '데브옵스개발자'},
                  {label : "데스크톱개발자", value : '데스크톱개발자'},
                  {label : "데이터 사이언티스트", value : '데이터 사이언티스트'},
                  {label : "데이터베이스 관리자", value : '데이터베이스 관리자'},
                  {label : "디지털포렌식 전문가", value : '디지털포렌식 전문가'},
                  {label : "머신러닝 엔지니어", value : '머신러닝 엔지니어'},
                  {label : "모의해킹 전문가", value : '모의해킹 전문가'},
                  {label : "미들티어 개발자", value : '미들티어 개발자'},
                  {label : "보안솔루션개발자", value : '보안솔루션개발자'},
                  {label : "보안컨설턴트", value : '보안컨설턴트'},
                  {label : "빅 데이터 개발자", value : '빅 데이터 개발자'},
                  {label : "서버 개발자", value : '서버 개발자'},
                  {label : "소프트웨어 테스트 엔지니어", value : '소프트웨어 테스트 엔지니어'},
                  {label : "시스템 관리자", value : '시스템 관리자'},
                  {label : "시스템소프트웨어개발자", value : '시스템소프트웨어개발자'},
                  {label : "악성코드분석전문가", value : '악성코드분석전문가'},
                  {label : "앱개발자", value : '앱개발자'},
                  {label : "워드프레스 개발자", value : '워드프레스 개발자'},
                  {label : "웹 퍼블리셔", value : '웹 퍼블리셔'},
                  {label : "웹 프로그래머", value : '웹 프로그래머'},
                  {label : "응용소프트웨어개발자", value : '응용소프트웨어개발자'},
                  {label : "임베디드 소프트웨어 개발자", value : '임베디드 소프트웨어 개발자'},
                  {label : "정보보안가", value : '정보보안가'},
                  {label : "정보시스템감리사", value : '정보시스템감리사'},
                  {label : "컴퓨터보안전문가", value : '컴퓨터보안전문가'},
                  {label : "클라이언트개발자", value : '클라이언트개발자'},
                  {label : "풀 스택 개발자", value : '풀 스택 개발자'},
                  {label : "해커", value : '해커'},
                ]}

                containerStyle = {{height : 50, padding : 5}}
                itemStyle ={{
                  justifyContent : 'flex-start'
                }}
                onChangeItem = {item => {
                  setUserJob(item.value);
                  }
                }
                >
              </DropDownPicker>
              </View>
              <View style = {{padding : 10,flexDirection:'row', justifyContent : 'left', alignItems : 'center'}}>

                <Text style = {{fontSize : 20, fontWeight : 'bold'}}>
                  관심 : 
                </Text>
              <DropDownPicker style = {{flex : 1, width : 150, padding : 10}}
                items = {[
                  {label : "웹개발", value : '웹개발'},
                  {label : "앱개발", value : '앱개발'},
                  {label : "머신러닝", value : '머신러닝'},
                  {label : "게임", value : '게임'},
                  {label : "네트워크개발", value : '네트워크개발'},
                  {label : "빅데이터", value : '빅데이터'},
                  {label : "데브옵스", value : '데브옵스'},
                  {label : "데이터베이스", value : '데이터베이스'},
                  {label : "디자인", value : '디자인'},
                  {label : "딥러닝", value : '딥러닝'},
                  {label : "서버개발", value : '서버개발'},
                  {label : "임베디드", value : '임베디드'},
                  {label : "정보보안", value : '정보보안'},
                ]}

                containerStyle = {{height : 50, padding : 5}}
                itemStyle ={{
                  justifyContent : 'flex-start'
                }}
                onChangeItem = {(item) => {
                  setUserInterest(item.value);
                }
                }
                >
              </DropDownPicker>
            </View>
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
    height : '100%',
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
      alignItems : 'center',
      // paddingTop : 100
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
    marginTop : 130,
    marginBottom : 50
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