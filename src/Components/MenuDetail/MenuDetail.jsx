import React, {useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchFoodId, clearId, clearSearch } from "../../actions/actions";
import NavBar from '../NavBar/NavBar';
import Loading from '../Loading/Loading'

export default function MenuDetail() {
    let { id } = useParams();
    let dispatch = useDispatch();
    let foodDetail = useSelector((state) => state.foodDetail);

    
    useEffect(() => {
        dispatch(searchFoodId(id));
        dispatch(clearId());
        dispatch(clearSearch())
    }, []);
    
    if(foodDetail.length !== 0){
    return (
        <div>
            <NavBar />
            <div>
                <div>
                    <h1>{foodDetail.title}</h1>
                    <div>
                        <div>
                            <img src={foodDetail.image} alt='food'/>
                        </div>
                        <div>
                            <div>
                                {/*Aca irian los iconos y el health score */}

                            </div>
                            <div>
                                {
                                    foodDetail.diets && foodDetail.diets.map(x => (
                                        <p>{x}</p>
                                    )) 
                                }
                                {
                                    foodDetail.dishTypes && foodDetail.dishTypes.map( x => (
                                        <p>{x}</p>
                                    ))
                                }
                            </div>
                            <div>
                                {
                                    foodDetail.occassions && foodDetail.occassions.map(x => (
                                        <div>
                                            <img />
                                            <p>{x}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div>
                        <span>
                            {foodDetail.summary}
                        </span>
                    </div>
                    <div>
                        {
                            foodDetail.extendedIngredients && foodDetail.extendedIngredients.map(x => (
                                <p>{x.name}</p>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <Link to='/'>
                        <button>Volver</button>
                    </Link>
                    <button>Agregar</button>{/* Revisar si sea necesario agregar el boton */}
                </div>
            </div>
        </div>
    ) }
    else if(!foodDetail.length){
        return (
            <div>
                <NavBar />
                <Loading />
            </div>
        )
    }
}

/* 
Info que tengo que traer:
id, vegetarian, glutenFree, veryHealthy, healthScore

 summary, dishTypes(array), diets(array)


ingredientes: extendedIngredients(array) // name

*/