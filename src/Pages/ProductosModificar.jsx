import { useForm } from "react-hook-form";
// import Button from "react-bootstrap/Button";
// import Form from 'react-bootstrap/Form';
import { Button, Form } from "react-bootstrap";
import "./Registro.css";
import { deleteProducto, getById, update } from "../Services/productosServices";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductosModificar() {
  const { register, handleSubmit, setValue } = useForm({ mode: "onChange" });
  const { id } = useParams();
  useEffect(() => {
    const request = async () => {
      try {
        const producto = await getById(id);
        setValue("title", producto.data().title);
        setValue("price", producto.data().price);
        setValue("thumbnail", producto.data().thumbnail);
        setValue("details", producto.data().details);
      } catch (e) {
        console.log(e);
      }
    };
    request();
  }, [id]);

  const onSubmit = async (data) => {
    try {
      const document = await update(id, data);
      console.log(
        "🚀 ~ file: productosAlta.jsx:19 ~ onSubmit ~ document:",
        document
      );
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async () => {
    try {
      const document = await deleteProducto(id);
      console.log(
        "🚀 ~ file: productosAlta.jsx:19 ~ onSubmit ~ document:",
        document
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Button onClick={handleDelete}>Eliminar</Button>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            {...register("title")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese su precio"
            {...register("price")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su imagen"
            {...register("thumbnail")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese los detalles del producto"
            {...register("details")}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </div>
  );
}

export default ProductosModificar;