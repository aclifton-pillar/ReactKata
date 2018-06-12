export const GET_RECIPES = 'LOAD';
export const GET_RECIPES_SUCCESS = 'LOAD_SUCCESS';
export const GET_RECIPES_FAIL = 'LOAD_FAIL';

export default function reducers(state = { recipes: [] }, action) {
    switch (action.type) {
        case GET_RECIPES:
            return { ...state, loading: true };
        case GET_RECIPES_SUCCESS:
            return { ...state, loading: false, recipes: action.payload.data.items };
        case GET_RECIPES_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Error while fetching repositories'
            };
        default:
            return state;
    }
}

export function getRecipes() {
    return {
        type: GET_RECIPES,
        payload: {
            request: {
                url: `/recipes`
            }
        }
    };
}