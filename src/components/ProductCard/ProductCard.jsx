import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ producto }) {
    const { nombre, descripcion, precio, id, stock, codigo, categoria } =
        producto;

    return (
        <div>
            <hr />
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <p>Precio: {precio}</p>
            <p>Cantidad: {stock}</p>
            <Link to={"/detail/" + id}>Ver detalles</Link>
        </div>
    );
}

export default ProductCard;
