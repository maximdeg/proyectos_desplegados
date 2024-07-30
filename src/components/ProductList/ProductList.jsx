import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function ProductList({ productos }) {
   return (
      <div>
         {productos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
         ))}
      </div>
   );
}

export default ProductList;
