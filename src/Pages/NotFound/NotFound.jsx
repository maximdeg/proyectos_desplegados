import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h1> ERROR 404 no encontramos esta ruta</h1>
            <Link to="/home">HOME</Link>
        </div>
    );
}

export default NotFound;
