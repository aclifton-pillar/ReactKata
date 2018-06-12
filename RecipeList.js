import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {getRecipes} from './reducers';

class RecipeList extends Component {
    componentDidMount() {
        this.props.getRecipes();
    }

    renderItem = ({item}) => (
        <Text>{item.name}</Text>
    );

    render() {
        const {recipes} = this.props;
        return (
            <FlatList
                styles={styles.container}
                data={recipes}
                renderItem={this.renderItem}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
});

const mapStateToProps = state => {
    let storedRecipes = state.recipes.map(recipe => ({key: recipe.id, ...recipe}));
    return {
        recipes: storedRecipes
    };
};

const mapDispatchToProps = {
    getRecipes: getRecipes
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);