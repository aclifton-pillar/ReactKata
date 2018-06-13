import React, {Component} from 'react';
import {View, StyleSheet} from "react-native";

import RecipeList from '../RecipeList';
import {Provider} from "react-redux";
import configureStore from "../firestore/configureStore";

const store = configureStore();

export default class RecipeHome extends Component {

    static navigationOptions = {title: 'Top Notch Recipes'};

    render() {

        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <RecipeList/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 300,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
