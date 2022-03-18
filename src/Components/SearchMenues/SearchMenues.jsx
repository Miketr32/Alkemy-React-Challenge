import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFood } from "../../actions/actions";

export default function SearchMenues(){
    const foodSearched = useSelector((state) => state.foodSearched);
    const foodAdded = useSelector((state) => state.menuEdited);
    const dispatch = useDispatch();
    const [error, setError] = useState(false);

    let founded = foodSearched.filter(x => {
        let encontrado = foodAdded.find((y) => y.id === x.id)
        return encontrado == undefined
    });

    const addFoodie = (e) => {
        let add = founded.find(x => x.id === e.target.value);
        let filterVegan = foodAdded.filter(y => y.vegan === true);
        let filterNotVegan = foodAdded.filter(y => y.vegan === false);
        if(filterVegan.length < 2 && add.vegan === true){
            return dispatch(addFood(add));
        }
        else if(filterNotVegan.length < 2 && add.vegan === false){
            return dispatch(addFood(add));
        }
        else{
            return setError(true);
        }
    }

    return(
        <div>
            <div>
                {
                    founded && founded.map(x => (
                        <div>
                            <h3>{x.title}</h3>
                            <img src={x.image} alt='foodie'/>
                            <div>

                            </div>
                            <input
                            type='button'
                            value={x.id}
                            onClick={addFoodie}
                            >Add
                            </input>
                            {
                                error ? 'You have 2 same options' : ''
                            }
                        </div>
                    )) 
                }
            </div>
        </div>
    )
}