import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from "../screens/HomeScreen";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import IntroScreen from "../screens/IntroScreen";
import IntroFormScreen from "../screens/IntroFormScreen";

const AppStack = createBottomTabNavigator({
    Home: HomeScreen,
    Intro: IntroScreen
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