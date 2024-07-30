import { Link, useParams } from "react-router-dom";
import { getProductById } from "../../helpers/productos";
import { useGlobalContext } from "../../Context/GlobalContext";

function Details() {
    const params = useParams();
    const { handleDeleteProduct } = useGlobalContext();
    // const producto = getProductById(params.product_id);

    const { nombre, descripcion, precio, stock, codigo, categoria } =
        getProductById(params.product_id);

    return (
        <div>
            <h1>Details</h1>
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <p>Precio: {precio}</p>
            <p>Cantidad: {stock}</p>
            <p>Codigo: {codigo}</p>
            <p>Categoria: {categoria}</p>
            <button>
                <Link to={"/home"}>Volver</Link>
            </button>
            <button onClick={() => handleDeleteProduct(params.product_id)}>
                Eliminar
            </button>
            <button>Agregar al carrito</button>
        </div>
    );
}

export default Details;
