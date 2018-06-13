import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {enhance} from './enhancers/RecipeHome.enhancer';

class RecipeList extends Component {
    static contextTypes = {
        store: PropTypes.object.isRequired
    };

    componentWillMount() {
        const {firestore} = this.context.store;
        firestore.get('recipes');
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

export default enhance(RecipeList);

export default connect((state) => ({
    recipes: state.firestore.ordered.recipes
}));