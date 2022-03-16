import React, {useEffect, useState} from "react";
import { getFoods } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import Food from "../Food/Food";



export default function Menu(){
    let menu = useSelector((state) => state.allFoods.flat());
    let menuEdited = useSelector((state) => state.menuEdited.flat());
    let dispatch = useDispatch();

    let vegan = menuEdited.filter(x => x.vegan === true);
    let notVegan = menuEdited.filter(x => x.vegan === false)

    useEffect(() => {
        dispatch(getFoods());
    },[]);

    return(
        <div>
            <div>
                <div>
                {
                        notVegan && notVegan.map( (x) => (
                            <Food 
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
                <div>
                    {
                        vegan && vegan.map( x => (
                            <Food 
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
        </div>
    )
}

