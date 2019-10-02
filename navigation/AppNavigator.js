import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from "../screens/HomeScreen";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import IntroScreen from "../screens/IntroScreen";
import IntroFormScreen from "../screens/IntroFormScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import AddCityScreen from "../screens/AddCityScreen";

const AppStack = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({tintColor}) => <Icon name="home" size={25} color="#38BBF0" />
        }
    },
    Intro: {
        screen: IntroScreen,
        navigationOptions: {
            tabBarLabel: "Welcome",
            tabBarIcon: ({tintColor}) => <Icon name="users" size={25} color="#38BBF0" />
        }
    },

    AddCity: {
        screen: AddCityScreen,
        navigationOptions: {
            tabBarLabel: "AddCity",
            tabBarIcon: ({tintColor}) => <Icon name="plus" size={25} color="#38BBF0" />
        }
    }
});

const AuthStack = createStackNavigator({
    SignIn: IntroFormScreen,
    Welcome: IntroScreen
});

const SwitchNavigator = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
},{
    initialRouteName: "AuthLoading",
});

export default createAppContainer(SwitchNavigator);