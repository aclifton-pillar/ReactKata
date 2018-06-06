import React, {Component} from 'react';
import {Button, Platform, FlatList, Text, View, StyleSheet, TouchableHighlight} from "react-native";

type Props = {};

export default class RecipeHome extends Component<Props> {

    static navigationOptions = {title: 'Top Notch Recipes'};

    constructor(props) {
        super(props);
        this.state = {isLoading: true, dataSource: [{id: 0, name: "test"}]};
    }

    async getCurrent() {
        const ipAddr = Platform.OS === 'ios' ? '127.0.0.1' : '10.0.2.2';

        return await fetch('http://' + ipAddr +':9000/recipes')
            .then((response) => response.json())
            .then((resJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: resJson.items,
                });
            })
            .catch((err) => err);
    }

    componentDidMount() {
        this.getCurrent()
    }

    render() {

        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => (
                        <TouchableHighlight onPress={() =>
                            this.props.navigation.navigate("RecipeDetail", {id: item.id})}>
                            <Text testID={`recipe${item.id}`}>{item.name}</Text>
                        </TouchableHighlight>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
                <Text testID="superbob">anything</Text>
            </View>
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
