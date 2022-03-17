const initialState = {
    allFoods: [],
    foodDetail: [],
    foodFilter: [],
    foodSearched: [],
    menuEdited: []
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
            console.log("Ha ocurrido un error")
        };

        case "CLEAR_ID":
            return{
                ...state,
                foodDetail: []
            };
            
        default: 
            return state;
    }
}