import React, { Component, useEffect, useState } from "react";
import {
    FlatList,
    TextInput,
    Text,
    StyleSheet,
    View,
    Button,
    AsyncStorage,
    Dimensions,
    ImageBackground,
    SafeAreaView,
    ScrollView
} from "react-native";
import {useDispatch, connect, useSelector} from "react-redux";
import PropTypes from "prop-types";


const {width} = Dimensions.get("window");

const styleSheet = {
    container: {
        paddingTop: 20,
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

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },      {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },      {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },      {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];

    function Item({ title }) {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
            </View>
        );
    }

    const {dispatch, app: {informations}} = props;
    const [nameCity, setNameCity] = useState('');
    const disAllReducers = useDispatch();

    async function handleSubmit() {

        if (nameCity !== "") {
            await AsyncStorage.setItem("nameCity", nameCity);

            // On store le name dans le state avec dispatch
            dispatch.app.setNameCity(nameCity);
            dispatch.app.getMeteoInformationsCity(nameCity);

   /*         console.log(dispatch.app.getMeteoInformationsCity(nameCity));*/
        }
    }


    return (
        <View style={styleSheet.container}>
            <View style={{ alignSelf: "stretch" }}>
                <Text style={styleSheet.label}>City</Text>
                <TextInput
                    style={[styleSheet.input, {alignSelf: "stretch"}]}
                    onChangeText={(text) => setNameCity(text)}
                    value={nameCity}
                />
                <Button
                    onPress={handleSubmit}
                    title={"OK"}
                    color="#841584"
                />
            </View>

            <ScrollView>
            <FlatList
                style={{ flex:1 }}
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
            />
            </ScrollView>
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

const styles = StyleSheet.create({

    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default connect(({app}) => ({app}))(AddCityScreen);
