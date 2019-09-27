import React from "react";
import PropTypes from "prop-types";
import {View, Text, Dimensions, ImageBackground} from "react-native";
import {useSelector} from "react-redux";

const { width } = Dimensions.get("window");
const mainBackground = require("../assets/images/bg.jpg");

const styleSheet = {
    container: {
        width: width,
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    textStyle: {
        color: "black",
        fontSize: 25,
        fontWeight: "bold",
    },
};

const HomeScreen = props => {
    const name = useSelector(state => state.app.name);
 return(

<ImageBackground source={mainBackground} style={{flex:1}}>
    <View style={styleSheet.container}>
        <Text style={styleSheet.textStyle}>Hello {name}</Text>
    </View>
</ImageBackground>
);
};

HomeScreen.propTypes = {};

export default HomeScreen;