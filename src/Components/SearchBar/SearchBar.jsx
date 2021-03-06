import React, {useState, useEffect} from "react";
import { searchFoodName, clearSearch } from "../../actions/actions";
import { useDispatch } from "react-redux";
import AdvancedSearch from '../AdvancedSearch/AdvancedSearch';

export default function SearchBar() {
    const dispatch = useDispatch();
    const [food , setFood] = useState('');
    const [filter , setFilter ] = useState(false);
    const [searcher, setSearcher] = useState(false);

    const handleInputChange = (e) => {
        setFood(e.target.value)
    }

    const searchFood = (e) => {
        e.preventDefault()
        if(!searcher) return setSearcher(true);
        setSearcher(false)
    }

    useEffect(() => {
        dispatch(searchFoodName(food));
        dispatch(clearSearch());
        setFood('')
    },[searcher]);

    const advancedFilter = () => {
        if(!filter) return setFilter(true);
        setFilter(false);
    }


    return(
        <div>
            <div>
                <div class="d-flex container-fluid align-items-center" style={{background:'#EDEDED', height:'8vh'}}>
                    <div class="container d-flex align-items-center justify-content-around">
                        <div>
                            <input
                            class=" rounded-pill"
                            style={{border:'2px solid #D4BC65',outline:'none'}}
                            type="search" 
                            onChange={handleInputChange}
                            name='buscador'
                            value={food}
                            />
                            <button class="btn btn-light"
                            onClick={searchFood}>
                            Buscar
                            </button>
                        </div>
                        <div>
                            <a onClick={advancedFilter}>
                                Busqueda Avanzada
                            </a>
                        </div>
                    </div>
                </div>
                {
                    filter ? <AdvancedSearch /> : <span></span>
                }
            </div>

        </div>
    )
}