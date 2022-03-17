import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchFoodId } from "../../actions/actions";

export default function MenuDetail() {
    let { id } = useParams();
    let dispatch = useDispatch();
    let foodDetail = useSelector((state) => state.foodDetail);

    useEffect(() => {
        dispatch(searchFoodId(id))
    }, []);

    return (
        <div>
            
        </div>
    )
}