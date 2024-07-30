import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContext";

function NewProduct() {
    const { handleCreateProduct, getAvailableCategories, getErrors } =
        useGlobalContext();
    const categories = getAvailableCategories();
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

    const initialStateForm = {
        id: "",
        nombre: "",
        descripcion: "",
        precio: "",
        stock: "",
        codigo: "",
        categoria: "",
        thumbnail: "",
    };

    const [formValues, setFormValues] = useState(initialStateForm);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCreateProduct(e);

        const copyErrors = getErrors();
        console.log("COPY ERRORS", copyErrors);
        setErrors({ ...errors, copyErrors });
        console.log("NEW PRODUCT ERRORS", errors);
    };

    const handleChangeFormValue = (e) => {
        const { value, name } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <form onSubmit={(e) => handleSubmit(e, { ...formValues })}>
            <h1>Crear nuevo producto</h1>
            <div>
                {" "}
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    onChange={handleChangeFormValue}
                    value={formValues.nombre}
                />
                {/* {errors.nombre && (
                    <span style={{ color: "red" }}>
                        {errors.nombre.message}
                    </span>
                )} */}
            </div>

            <div>
                <label htmlFor="descripcion">Descripción</label>
                <textarea
                    type="text"
                    name="descripcion"
                    onChange={handleChangeFormValue}
                    value={formValues.descripcion}
                ></textarea>
            </div>
            <div>
                <label htmlFor="precio">Precio</label>
                <input
                    type="number"
                    name="precio"
                    onChange={handleChangeFormValue}
                    value={formValues.precio}
                />
            </div>
            <div>
                <label htmlFor="stock">Stock</label>
                <input
                    type="number"
                    name="stock"
                    onChange={handleChangeFormValue}
                    value={formValues.stock}
                />
            </div>
            <div>
                <label htmlFor="codigo">Código</label>
                <input
                    type="text"
                    name="codigo"
                    onChange={handleChangeFormValue}
                    value={formValues.codigo}
                />
            </div>
            <div>
                <label htmlFor="categoria">Categoría</label>
                <select
                    name="categoria"
                    id="categoria"
                    onChange={handleChangeFormValue}
                    value={formValues.categoria}
                >
                    {categories.map((category, index) => {
                        return (
                            <option value={category} key={index + category}>
                                {category}
                            </option>
                        );
                    })}
                    <option value={""} disabled>
                        No seleccionado
                    </option>
                </select>
            </div>
            <div>
                <label htmlFor="thumbnail">Thumbnail</label>
                <input
                    type="text"
                    name="thumbnail"
                    onChange={handleChangeFormValue}
                    value={formValues.thumbnail}
                />
            </div>
            <div>
                <Link to={"/home"}>
                    <button>Home</button>
                </Link>
                <button type="submit">Guardar</button>
            </div>
        </form>
    );
}

export default NewProduct;
