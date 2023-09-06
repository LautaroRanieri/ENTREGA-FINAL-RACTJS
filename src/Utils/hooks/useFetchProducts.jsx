import { useEffect, useState } from "react";
import { getAll } from "../../Services/productosServices";

function useFetchProducts() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buscar, setBuscar] = useState("celulares");
  //const [limit, setLimit] = useState(5);

  useEffect(() => {
    const request = async () => {
      try {
        const data = await getAll(buscar);
        setProductos(data.docs);
        setLoading(false);
      } catch (error) {
        console.log("Error", error);
      }
    };
    request();
  }, [buscar]);

  const tituloText = "Listado de Productos";  
  //const [titulo, setTitulo] =  useState(tituloText);

  const handleBuscar = (event) => {
    setBuscar(event?.target?.value);
  };

  return {
    productos,
    loading,
    buscar,
    handleBuscar,
  };
}

export default useFetchProducts;
