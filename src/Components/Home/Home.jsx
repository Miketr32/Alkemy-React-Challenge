import React from "react";
import NavBar from "../NavBar/NavBar";
import Menu from "../Menu/Menu";
import SearchBar from "../SearchBar/SearchBar";

export default function Home() {

    return(
        <div>
            <NavBar />
            <SearchBar />
            <Menu />
        </div>
    )
};