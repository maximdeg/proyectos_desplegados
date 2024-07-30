import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import {
    deleteProductById,
    getProducts,
    createProduct,
    getAvailableCategories,
} from "../helpers/productos";
import { getCart } from "../helpers/cart";
import { validateForm } from "../helpers/handleErrors";
const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const initialStateErrors = {
        nombre: "",
        descripcion: "",
        precio: "",
        stock: "",
        codigo: "",
        categoria: "",
        thumbnail: "",
    };
    const [errors, setErrors] = useState(initialStateErrors);
    const [productos, setProductos] = useState(getProducts());
    const [cart, setCart] = useState(getCart());
    const [searchTerm, setSearchTerm] = useState("");
    const navigation = useNavigate();

    const handleChangeSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        const productList = getProducts();
        if (searchTerm != "") {
            const newProductList = productList.filter((product) =>
                product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setProductos(newProductList);
            console.log("NEW PRODUCT LIST", newProductList);
        } else {
            setProductos(getProducts());
        }
    }, [searchTerm]);

    const handleDeleteProduct = (id) => {
        setProductos(deleteProductById(id));
        navigation("/home");
    };

    const getErrors = () => {
        return errors;
    };

    const handleCreateProduct = (e) => {
        const form = e.target;
        const formValues = new FormData(form);

        const newErrors = {
            nombre: "",
            descripcion: "",
            precio: "",
            stock: "",
            codigo: "",
            categoria: "",
            thumbnail: "",
        };

        const newProduct = {
            nombre: "",
            descripcion: "",
            precio: 0,
            stock: 0,
            codigo: "",
            categoria: "",
            thumbnail: "",
        };
        for (let property in newProduct) {
            newProduct[property] = formValues.get(property);
        }

        const errorsList = validateForm(newProduct);

        setErrors((prevState) => {
            return { ...prevState, ...errorsList };
        });
        
        // console.log("Global Handle Create", newErrors);

        if (!Object.keys(errors).length > 0) {
            newProduct.id = uuid();
            setProductos([...productos, newProduct]);
            createProduct(newProduct);
            console.log("Producto nuevo", newProduct);
            navigation("/home");
        }
    };

    const getUser = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        return user;
    };

    const logout = () => {
        localStorage.removeItem("user");
        navigation("/home");
    };

    return (
        <GlobalContext.Provider
            value={{
                productos,
                getProducts,
                getAvailableCategories,
                getErrors,
                logout,
                getUser,
                handleDeleteProduct,
                handleCreateProduct,
                handleChangeSearchTerm,
                searchTerm,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

const useGlobalContext = () => {
    //  Esto devuelve el objeto value del GlobalContextProvider
    return useContext(GlobalContext);
};

export { useGlobalContext, GlobalContextProvider };
