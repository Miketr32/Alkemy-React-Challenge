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
            const foodDeleted = initialState.menuEdited.filter((x) => {
                return x.id !== action.payload
            });
            console.log(initialState.menuEdited) // Reparar el getFoods en food
            return{
                ...state,
                menuEdited: foodDeleted
            };

        case "CLEAR_ID":
            return{
                ...state,
                foodDetail: []
            };

        case "CLEAR_SEARCH":
            return{
                ...state,
                foodSearched: []
            };
            
        default: 
            return state;
    }
}