import React, {useState, useEffect} from "react";
import { searchFoodName } from "../../actions/actions";
import { useDispatch } from "react-redux";
import AdvancedSearch from '../AdvancedSearch/AdvancedSearch';

export default function SearchBar() {
    const dispatch = useDispatch();
    const [food , setFood] = useState("");
    const [filter , setFilter ] = useState(false);
    const [searcher, setSearcher] = useState(false);

    const handleInputChange = (e) => {
        setFood({[e.target.name]: e.target.value})
    }

    const searchFood = (e) => {
        e.preventDefault();
        dispatch(searchFoodName(food))
        setFood('')
    }


  
        


    const advancedFilter = () => {
        if(!filter) return setFilter(true);
        setFilter(false);
    }


    return(
        <div>
            <div>
                <div>
                    <div>
                        <input
                        type="search" 
                        onChange={handleInputChange}
                        name='buscador'

                        />
                        <button onClick={searchFood}>Buscar</button>
                    </div>
                    <div>
                        <button onClick={advancedFilter}>
                            Busqueda Avanzada
                        </button>
                    </div>
                </div>
                {
                    filter ? <AdvancedSearch /> : <span></span>
                }
            </div>

        </div>
    )
}