import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
    Detail,
    Home,
    Cart,
    NewProduct,
    Login,
    NotFound,
    Review,
} from "./Pages";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <h1>Hello world!!</h1>
                        <Link to={"/home"}>Go home</Link>
                    </>
                }
            />
            <Route path="/home" element={<Home></Home>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/product/new" element={<NewProduct></NewProduct>} />
            <Route path="/detail/:product_id" element={<Detail></Detail>} />
            <Route path="/cart" element={<Cart></Cart>} />
            <Route path="/*" element={<NotFound></NotFound>} />
            <Route path="/reviews" element={<Review></Review>} />
        </Routes>
    );
}

export default App;
