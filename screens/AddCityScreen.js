import React, { Component, useEffect, useState } from "react";
import {FlatList, TextInput, Text, StyleSheet, View, Button, AsyncStorage, Dimensions} from "react-native";
import {useDispatch, connect, useSelector} from "react-redux";
import PropTypes from "prop-types";

const {width} = Dimensions.get("window");

const styleSheet = {
    container: {
        width: width,
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        color: "black",
        fontSize: 18,
    },
    input: {
        width: "100%",
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
    },
};

const AddCityScreen = props => {

    const {dispatch, app: {informations}} = props;
    const [nameCity, setNameCity] = useState('');
    const disAllReducers = useDispatch();

    async function handleSubmit() {

        if (nameCity !== "") {
            await AsyncStorage.setItem("nameCity", nameCity);

            // On store le name dans le state avec dispatch
            dispatch.app.setNameCity(nameCity);


            console.log(dispatch.app.getMeteoInformationsCity(nameCity));
        }
    }


    return (
        <View style={styleSheet.container}>
            <Text style={styleSheet.label}>City</Text>
            <TextInput
                style={styleSheet.input}
                onChangeText={(text) => setNameCity(text)}
                value={nameCity}
            />
            <Button
                onPress={handleSubmit}
                title={"OK"}
                color="#841584"/>


        </View>
    );
}

AddCityScreen.propTypes = {
    dispatch: PropTypes.func.isRequired,
    app: PropTypes.shape({
        informations: PropTypes.object,
    })

       /* .isRequired,*/
};

const mapStateToProps = state => ({
    nameCity: state.nameCity,
});

export default connect(({app}) => ({app}))(AddCityScreen);
