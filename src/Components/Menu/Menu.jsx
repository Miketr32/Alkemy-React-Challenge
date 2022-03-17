import React, {useEffect, useState} from "react";
import { getFoods } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import Food from "../Food/Food";
import SearchMenues from "../SearchMenues/SearchMenues";



export default function Menu(){
    let menu = useSelector((state) => state.allFoods.flat());
    let menuEdited = useSelector((state) => state.menuEdited.flat());
    let foodSearched = useSelector((state) => state.foodSearched)
    let dispatch = useDispatch();

    let vegan = menuEdited.filter(x => x.vegan === true);
    let notVegan = menuEdited.filter(x => x.vegan === false)

    useEffect(() => {
        dispatch(getFoods());
    },[]);

    return(
        <div>
            { foodSearched.length !== 0 ? <SearchMenues /> : 
                <div class=" container border d-flex column align-items-center max-vh-50">
                    <div class="d-flex row">
                    {
                            notVegan && notVegan.map( (x) => (
                                <Food
                                    key={x.id} 
                                    id= {x.id}
                                    title= {x.title} 
                                    image= {x.image}
                                    vegan={x.vegan}
                                    vegetarian={x.vegetarian}
                                    glutenFree={x.glutenFree}
                                    healthy={x.veryHealthy}
                                />
                            ))
                    }
                    </div>
                    <div class="d-flex row">
                        {
                            vegan && vegan.map( x => (
                                <Food
                                    key={x.id} 
                                    id= {x.id}
                                    title= {x.title}
                                    image= {x.image}
                                    vegan={x.vegan}
                                    vegetarian={x.vegetarian}
                                    glutenFree={x.glutenFree}
                                    healty={x.veryHealthy}
                                />
                            ))
                        }
                    </div>
                </div> 
            }
        </div>
    )
}

