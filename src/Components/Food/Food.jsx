import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteFood } from "../../actions/actions";

export default function Food({id, title, image, vegan, vegetarian, glutenFree, healthy}) {
    let editMenu = useSelector((state) => state.menuEdited.flat());
    const dispatch = useDispatch();
    const [addFood, setAddFood] = useState(true);

    const modifyMenu = () => {
        setAddFood(false);
        dispatch(deleteFood(id));
    }
    if(addFood){
    return(
            <div 
            class="card"
            style={{maxWidth:'50vh'}}>
                    <div>
                        <Link to={`/detail/${id}`}>
                            <h3>{title}</h3>
                            <img src={image} alt='food'/>
                        </Link>
                    </div>
                    <div>
                        <span>
                            {vegan ? <img /> : ""}
                            {vegetarian ? <img /> : ""}
                        </span>
                        <span>
                            {glutenFree ? <img /> : ""}
                            {healthy ? <img /> : ""}
                        </span>
                    </div>
                    <div>
                        <button onClick={modifyMenu}>Eliminar</button>
                    </div>
            </div>
    )} else {
        <div>
            
        </div>
    }
}