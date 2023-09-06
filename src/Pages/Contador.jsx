/* eslint-disable react/prop-types */
import { useState } from "react";

function Contador() {
  const [cantidad, setCantidad] = useState(0);

  const handleClickIncrementar = () => {
    setCantidad(cantidad + 1);
  };

  const handleClickDecrementar = () => {
    setCantidad(cantidad - 1);
  };

  return (
    <div>
      <button onClick={handleClickIncrementar}>Incrementar</button>
      <p>Cantidad: {cantidad}</p>
      <button onClick={handleClickDecrementar}>Decrementar</button>
    </div>
  );
}

export default Contador;
