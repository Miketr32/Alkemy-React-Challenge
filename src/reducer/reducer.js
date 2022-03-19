const initialState = {
    allFoods: [],
    foodDetail: [],
    foodFilter: [],
    foodSearched: [],
    menuEdited: [],
    menuFull: false,
    helper: []
}


export default function rootReducer(state = initialState , action){
    switch(action.type) {

        case "GET_FOODS": 
            return {
                ...state,
                allFoods: action.payload,
                menuEdited: action.payload
            };

        case "GET_FOOD_DETAILS":
            return{
                ...state,
                foodDetail: action.payload
            };

        case "FOOD_SEARCHER":
            return{
                ...state,
                foodSearched: action.payload
            };

        case "ADD_FOOD":
            if(initialState.menuEdited.length < 4){
            return{
                ...state,
                menuEdited: initialState.menuEdited.push(action.payload)
            }
        }
        else{
            return{
                ...state,
                menuFull: true,
                helper: initialState.helper.push(action.payload)
            }
        };

        case "DELETE_FOOD":
            return{
                ...state,
                menuEdited: initialState.menuEdited.filter(x => x.id === action.payload)
            };

        case "CLEAR_ID":
            return{
                ...state,
                foodDetail: []
            };

        case "CLEAR_SEARCH":
            return{
                ...state,
                foodSearched:[]
            };
            
        default: 
            return state;
    }
}