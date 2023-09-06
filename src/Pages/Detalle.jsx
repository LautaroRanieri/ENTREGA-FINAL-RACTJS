import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getById } from '../Services/productosServices';
import Loading from '../Components/Loading';

//Component tipo funcion
function Detalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  console.log('🚀 ~ file: Detalle.jsx:6 ~ Detalle ~ params:', id);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getById(id);

        setProducto(response.data());
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    request();
  }, [id]);

  return (
    <Loading loading={loading}>
      <div className="">
        <h1>{producto.title}</h1>
        <img src={producto.thumbnail} style={{width:20+"%"}}></img>
        <p>${producto.price}</p>
        <p>{producto.details}</p>
      </div>
    </Loading>
  );
}

export default Detalle;
