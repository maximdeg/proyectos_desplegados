import React from "react";
import { ProductList } from "../../components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContext";

function Home() {
    const { getUser, logout, handleChangeSearchTerm, searchTerm, productos } =
        useGlobalContext();
    // const productos = getProducts();
    const user = getUser();

    console.log("HOME/PRODUCTOS", productos);

    return (
        <div>
            {user ? (
                <button onClick={logout}>Cerrar sesion</button>
            ) : (
                <Link to={"/login"}>Login</Link>
            )}
            {user && user.role === "admin" && (
                <>
                    <Link to={"/product/new"}>Crear producto</Link>
                    <Link to={"/cart"}>Carrito</Link>
                </>
            )}
            {user && user.role === "user" && (
                <>
                    <Link to={"/cart"}>Carrito</Link>
                </>
            )}
            <input onChange={handleChangeSearchTerm} value={searchTerm} />
            <h1>Elige nuestros productos</h1>
            <ProductList productos={productos}></ProductList>
        </div>
    );
}

export default Home;
