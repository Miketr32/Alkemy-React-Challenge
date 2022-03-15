import axios from 'axios';

export function getFoods(){
    return async function (dispatch) {
        try{
            let allFoods = await axios.get()
            dispatch({
                type:"GET_FOODS",
                payload: allFoods.data
            })
        }
        catch(error){
            console.log('We have an error type: ' + error);
        }
    }
};

export function searchFoodId(){
    return async function(dispatch){
        try{
            let foundedId = await axios.get();
            dispatch({
                type:"GET_FOOD_DETAILS",
                payload: foundedId.data
            })
        }
        catch(error){
            console.log(`Ha ocurrido un error de tipo: ${error}`)
        }
    }
}

export function searchFoodName() {
    return async function (dispatch){
        try {
            let foundedNames = await axios.get();
            dispatch({
                type:"FOOD_SEARCHER",
                payload: foundedNames.data
            })
        } 
        catch (error) {
            console.log(`Ha ocurrido un error de tipo: ${error}`)
        }
    }
};
