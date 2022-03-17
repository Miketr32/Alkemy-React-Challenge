import React from "react";
import { Link } from "react-router-dom";
import { GiKnifeFork } from '../../../node_modules/react-icons/gi';
import {MdLogout} from '../../../node_modules/react-icons/md/';

export default function NavBar() {

    return (
        <div class='container-fluid d-flex justify-content-between align-items-center' style={{height:'6vh', background:'#D4BC65'}}>
            <div>
                <Link to='/'>
                    <GiKnifeFork /> FoodApp
                </Link>
            </div>
            <div>
                <Link to='/login'>
                    <MdLogout /> 
                </Link>
            </div>
        </div>
    )
}