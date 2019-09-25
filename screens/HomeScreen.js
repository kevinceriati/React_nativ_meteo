import React from "react";
import PropTypes from "prop-types";
import {View, Text, Dimensions} from "react-native";

const { width } = Dimensions.get("window");

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

const HomeScreen = props => (
    <View style={styleSheet.container}>
        <Text style={styleSheet.textStyle}> Hello !</Text>
    </View>
);

HomeScreen.propTypes = {};

export default HomeScreen;