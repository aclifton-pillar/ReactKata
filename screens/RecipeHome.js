import React, {Component} from 'react';
import {Platform, FlatList, Text, View, StyleSheet, TouchableHighlight} from "react-native";

import axios from 'axios';
import {applyMiddleware, createStore} from "redux";
import axiosMiddleware from 'redux-axios-middleware';

import reducers from '../reducers';
import RecipeList from '../RecipeList';
import {Provider} from "react-redux";

const client = axios.create({
    baseURL: 'http://localhost:9000',
    responseType: 'json'
});

const store = createStore(reducers, applyMiddleware(axiosMiddleware(client)));

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
