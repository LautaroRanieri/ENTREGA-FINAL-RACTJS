import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useAuthContext } from "../Context/AuthContext";

const styles = {
  card: {
    marginBottom: "10px",
    width: "18rem",
  },
};

function Producto({ id, price, title, seller, thumbnail }) {
  const { login } = useAuthContext();
  return (
    <Col xs={12} sm={6} lg={4} xxl={3}>
      <Card style={styles.card}>
        <Card.Img variant="top" src={thumbnail} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{price}</Card.Subtitle>
          <Card.Text>{seller?.nickname}</Card.Text>
          <Button variant="primary" as={Link} to={`/producto/${id}`}>
          Detalle
          </Button>
          {login && (
            <Button
              variant="primary"
              as={Link}
              to={`/productos/modificar/${id}`}
            >
              Modificar
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Producto;
