import Producto from './Producto';
import Row from 'react-bootstrap/Row';
import useFetchProducts from '../Utils/hooks/useFetchProducts';
import Loading from './Loading';

function Productos() {
  const { productos, loading, buscar, handleBuscar } = useFetchProducts();

  const titulo = 'Listado de productos';

  return (
    <Loading loading={loading}>
      <div>
        <input value={buscar} onChange={handleBuscar} />
        <h1>{titulo}</h1>
        <Row>
          {productos.map((producto) => (
            <Producto key={producto.id} {...producto.data()} id={producto.id} />
          ))}
        </Row>
      </div>
    </Loading>
  );
}

export default Productos;
