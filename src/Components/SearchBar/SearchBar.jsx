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
                <div class="d-flex container-fluid align-items-center" style={{background:'#EDEDED', height:'8vh'}}>
                    <div class="container d-flex align-items-center justify-content-around">
                        <div>
                            <input
                            class=" rounded-pill"
                            style={{border:'2px solid #D4BC65',outline:'none'}}
                            type="search" 
                            onChange={handleInputChange}
                            name='buscador'

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