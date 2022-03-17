import axios from 'axios';

const apiKey = 'de4ed94e61b34178baa86565b917df87';
export function getFoods(){
    return async function (dispatch) {
        try{
            let vegan = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&tags=vegan&number=2`);
            let notVegan = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&tags!==vegan&number=2`);
            let recipes = [vegan.data.recipes, notVegan.data.recipes]
            dispatch({
                type:"GET_FOODS",
                payload: recipes
            })
        }
        catch(error){
            console.log('We have an error type: ' + error);
        }
    }
};

export function searchFoodId(id){
    return async function(dispatch){
        try{
            let foundedId = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
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

export function searchFoodName(name) {
    return async function (dispatch){
        try {
            let foundedNames = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&fillIngredients=true&titleMatch=${name}`);
            dispatch({
                type:"FOOD_SEARCHER",
                payload: foundedNames.data.results
            })
        } 
        catch (error) {
            console.log(`Ha ocurrido un error de tipo: ${error}`)
        }
    }
};

export function addFood(id) {
    return function (dispatch) {
            dispatch({
                type:"ADD_FOOD",
                payload: id
            })
    }
};

export function deleteFood(id) {
    return function (dispatch) {
        dispatch({
            type:"DELETE_FOOD",
            payload: id
        })
    }
};

export function clearId() {
    return {
        type:"CLEAR_ID",
    }
};
