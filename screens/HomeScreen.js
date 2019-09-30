import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {View, Text, Dimensions, ImageBackground, Image, AsyncStorage} from "react-native";
import {useDispatch, useSelector, connect} from "react-redux";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

/*import Image from "react-native-web/src/exports/Image";*/

const {width} = Dimensions.get("window");
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
    errorStyle: {
        color: "red",
        fontSize: 25,
        fontWeight: "bold",
    },
};

async function getName() {
    const temp = await AsyncStorage.getItem("name");
    disAllReducers.app.setName(temp);
    console.log(temp)
}


const HomeScreen = props => {
    const name = useSelector(state => state.app.name);
    const disAllReducers = useDispatch();

    async function getName() {
        const temp = await AsyncStorage.getItem("name");
        disAllReducers.app.setName(temp);
        console.log(temp)
    }



////////////////// Localisation ///////////////////////////////////////////////////////////////////////////
    async function _getLocationAsync() {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== "granted") {
            setError("Permission to access ocation was denied");
        }
        let location = await Location.getCurrentPositionAsync({});
        dispatch({type: "app/getMeteoInformations", payload: location});
    };
    useEffect(() => {
        _getLocationAsync();
    }, []);

    useEffect(() => {
        getName()
        dispatch({type: 'app/getMeteoInformations'});
    }, []);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    useEffect(() => {
        if (informations.main) {
            setNameCity(informations.name);
            setTemp(informations.main.temp);
        }
        console.log(informations)
    });

    const {dispatch, app: {informations}} = props;
    const [nameCity, setNameCity] = useState('');
    const [temp, setTemp] = useState('');
    const [error, setError] = useState('');


    return (

        <ImageBackground source={mainBackground} style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <ImageBackground source={badge}
                             style={{
                                 position: "absolute",
                                 width: 150,
                                 height: 150,
                                 justifyContent: "center",
                                 top: 150
                             }}>
                <Text style={[styleSheet.textStyle, {
                    color: "#209981",
                    alignSelf: "center",
                    textAlign: "center",
                    paddingTop: 5,
                    paddingRight: 50
                }]}>Hi</Text>
                <Text
                    style={[styleSheet.textStyle, {
                        color: "#38BBF0",
                        paddingBottom: 5,
                        textAlign: "center"
                    }]}>{name}</Text>
            </ImageBackground>
            <View style={styleSheet.container}>
                <Text style={styleSheet.textStyle}>{`Ville: ${nameCity}`}</Text>
                <Text style={styleSheet.textStyle}>{`Temperature: ${temp}°C`}</Text>
                {error !== "" && <Text style={styleSheet.errorStyle}>{error}</Text>}
            </View>
        </ImageBackground>
    );
};

HomeScreen.propTypes = {
    dispatch: PropTypes.func.isRequired,
    app: PropTypes.shape({
        informations: PropTypes.object,
    }).isRequired,
};

export default connect(({app}) => ({app}))(HomeScreen);