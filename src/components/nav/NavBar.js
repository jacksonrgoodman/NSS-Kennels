import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./NavBar.css"

export const NavBar = ({ clearUser, isAuthenticated }) => {
    const history = useHistory()

    const handleLogout = () => {
        clearUser();
        history.push('/');
    }

    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/"> Home </Link>
            </li>
            {isAuthenticated
                ? <li className="navbar__item">
                    <Link className="navbar__link" to="/animals"> Animals </Link>
                </li>
                : null}
            <li className="navbar__item">
                <Link className="navbar__link" to="/locations"> Locations </Link>
            </li>
            {isAuthenticated
                ? <li className="navbar__item">
                    <Link className="navbar__link" to="/employees"> Employees </Link>
                </li>
                : null}
            {isAuthenticated
                ? <li className="navbar__item">
                    <Link className="navbar__link" to="/customers"> Pet Owners </Link>
                </li>
                : null}
            {isAuthenticated
                ? <li className="navbar__item">
                    <span className="navbar__link" onClick={handleLogout}> Logout </span>
                </li>
                : <li className="navbar__item">
                    <Link className="navbar__link" to="/login">Login</Link>
                </li>}
        </ul>
    );
};