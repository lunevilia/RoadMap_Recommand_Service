import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/Ionicons';

import RoadMapCategoryPage from "../Tab/RoadMapCategoryPage"
import NoticeListPage from "../Tab/NoticeListPage"
import MainPage from "../Tab/MainPage"

import NoticePage from "../Tab/View/NoticePage";

const TabStack = createBottomTabNavigator();
const MainStack = createStackNavigator();
const RoadMapCategoryStack = createStackNavigator();
const NoticeListStack = createStackNavigator();

const MainStackScreen = () => {
    return(
        <MainStack.Navigator>
            <MainStack.Screen name = "로드맵 추천 서비스" component={MainPage}/>
        </MainStack.Navigator>
    );
}
const RoadMapCategoryStackScreen = () => {
    return(
        <RoadMapCategoryStack.Navigator>
            <RoadMapCategoryStack.Screen name = "로드맵 카테고리" component={RoadMapCategoryPage}/>
        </RoadMapCategoryStack.Navigator>
    );
}

const NoticeListStackScreen = () => {
    return(
        <NoticeListStack.Navigator>
            <NoticeListStack.Screen name = "게시판" component={NoticeListPage}/>
            <NoticeListStack.Screen name = "NoticePage" component={NoticePage}/>
        </NoticeListStack.Navigator>
    );
}

const TabStackScreen = () => {
    return(
        <TabStack.Navigator initialRouteName = "홈"
            screenOptions={({route}) => ({
                tabBarIcon : ({ focused, color, size}) => {
                    let iconName;

                    if (route.name == '카테고리'){
                        iconName = focused
                        ? 'list'
                        : 'list-outline';
                    }

                    else if (route.name == '게시판'){
                        iconName = focused
                        ? 'md-reader'
                        : 'md-reader-outline';
                    }

                    else if (route.name == '홈'){
                        iconName = focused
                        ? 'home'
                        : 'home-outline';
                    }

                    return <Icon name = {iconName} size = {size} color = {color}/>
                },
            })}
            tabBarOptions = {{
                activeTintColor : 'skyblue',
                inactiveTintColor : 'gray',
            }}
        >
            <TabStack.Screen name="카테고리" component={RoadMapCategoryStackScreen} />
            <TabStack.Screen name="홈" component={MainStackScreen} />
            <TabStack.Screen name="게시판" component={NoticeListStackScreen}/>
        </TabStack.Navigator>
    );
}

export default TabStackScreen;