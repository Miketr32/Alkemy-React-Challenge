import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

export default function SearchMenues(){
    const foodSearched = useSelector((state) => state.foodSearched);
    
    return(
        <div>
            <h1>Hola</h1>
        </div>
    )
}