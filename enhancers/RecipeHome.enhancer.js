import { connect } from 'react-redux'
import {
    compose,
    withHandlers,
    lifecycle,
    withContext,
    getContext
} from 'recompose'

const withStore = compose(
    withContext({ store: PropTypes.object }, () => {}),
    getContext({ store: PropTypes.object }),
);

export const enhance = compose(
    withStore,
    withHandlers({
        loadData: props => () => props.store.firestore.get('recipes')
    }),
    lifecycle({
        componentWillMount(props) {
            props.loadData()
        }
    }),
    connect(({ firebase }) => ({
        recipes: firebase.ordered.recipes,
    }))
);