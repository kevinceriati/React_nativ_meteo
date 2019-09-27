import React from "react";
import PropTypes from "prop-types";
import {View, Text, Dimensions, ImageBackground, Image, AsyncStorage} from "react-native";
import {useDispatch, useSelector} from "react-redux";
/*import Image from "react-native-web/src/exports/Image";*/

const { width } = Dimensions.get("window");
const mainBackground = require("../assets/images/mountains.png");
const badge = require("../assets/images/badge.png");

const styleSheet = {
    container: {
        width: width,
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    textStyle: {
        fontSize: 20,
        fontWeight: "bold",
    },
};



const HomeScreen = props => {
    const name = useSelector(state => state.app.name);
    const disAllReducers = useDispatch();


    React.useEffect(() => {
        async function getName() {
            const temp = await AsyncStorage.getItem("name");
            disAllReducers.app.setName(temp);
        }

        getName();
    }, []);

 return(

<ImageBackground source={mainBackground} style={{flex:1, justifyContent: "center", alignItems: "center"}}>
    <ImageBackground source={badge} style={{position:"absolute", width: 150, height: 150, justifyContent: "center", top: 150}}>
    {/*<View style={styleSheet.container}>*/}
        <Text style={[styleSheet.textStyle, {color: "#209981", alignSelf: "center", textAlign: "center",paddingTop: 5, paddingRight: 50}]}>Hi</Text>
        <Text style={[styleSheet.textStyle, {color: "#38BBF0", paddingBottom: 5, textAlign: "center"}]}>{name}</Text>
    {/*</View>*/}
    </ImageBackground>
</ImageBackground>
);
};

HomeScreen.propTypes = {};

export default HomeScreen;