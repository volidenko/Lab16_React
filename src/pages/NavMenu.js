import React from "react";
import { NavLink } from "react-router-dom";

export default function NavMenu() {
    return (
        <nav class="navbar navbar-light bg-light">
            <NavLink to="/" activeStyle={active}>Main</NavLink>
            <NavLink to="/posts">Posts</NavLink>

            <NavLink to="/posts">Posts</NavLink>
        </nav>
    )

}