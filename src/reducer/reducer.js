const initialState = {
    allFoods: [],
    foodDetail: [],
    foodFilter: [],
    foodSearched: []
}

export default function rootReducer(state = initialState , action){
    switch(action.type) {

        case "GET_FOODS": 
            return {
                ...state,
                allFoods: action.payload
            };

        case "GET_FOODS_DETAIL":
            return{
                ...state,
                foodDetail: action.payload
            };

        case "FOOD_SEARCHER":
            return{
                ...state,
                foodSearched: action.payload
            }
            
        default: 
            return state;
    }
}