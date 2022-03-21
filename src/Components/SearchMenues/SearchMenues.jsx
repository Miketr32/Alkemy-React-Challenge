import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addFood, clearSearch } from "../../actions/actions";

export default function SearchMenues({searcher}){
    const foodSearched = useSelector((state) => state.foodSearched);
    const foodAdded = useSelector((state) => state.menuEdited);
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const [change, setChange] = useState(false)

    let founded = foodSearched.filter(x => {
        let encontrado = foodAdded.find((y) => y.id === x.id)
        return encontrado == undefined
    });
    const addFoodie = (e) => {
        let add = founded.find(x => x.id === e.target.value);
        let filterVegan = foodAdded.filter(y => y.vegan === true);
        let filterNotVegan = foodAdded.filter(y => y.vegan === false);
        if(filterVegan.length < 2 && add.vegan === true){
            setChange(true);
            return dispatch(addFood(add));
        }
        else if(filterNotVegan.length < 2 && add.vegan === false){
            setChange(true);
            return dispatch(addFood(add));
        }
        else{
            return setError(true);
        }
    }

    const open = () => {
        dispatch(clearSearch())
        searcher();
        
    }

    return(
        <div>
            <div>
                {
                    founded && founded.map(x => (
                        <div>
                            <Link to={`/detail/${x.id}`}>
                                <h3>{x.title}</h3>
                                <img src={x.image} alt='foodie'/>
                            </Link>
                            <div>
                            <form>
                            <input
                            type='button'
                            value={x.id}
                            onClick={addFoodie}
                            >
                            </input>
                            </form>
                            </div>
                            {
                                error ? 'You have 2 same options' : ''
                            }
                        </div>
                    )) 
                }
            </div>
            <button onClick={open}>X</button>
        </div>
    )
}