import { useForm } from "react-hook-form";
// import Button from "react-bootstrap/Button";
// import Form from 'react-bootstrap/Form';
import { Form } from "react-bootstrap";
import "./Registro.css";
import { create } from "../Services/authService";
import { useState } from "react";
import { registroMessage } from "../Utils/errorMessage";
import AlertNavigation from "../Components/AlertNavigation";
import ButtonWithLoading from "../Components/ButtonWithLoading";
import Input from "../Components/Input";

function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [alert, setAlert] = useState({
    variant: "",
    text: "",
    duration: 0,
    link: "",
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      console.log(data);
      await create(data);
      setAlert({
        variant: "success",
        text: "Usuario creado exitosamente",
        duration: 3000,
        link: "/ingresar",
      });
      setLoading(false);
    } catch (e) {
      console.log(e);
      setAlert({
        variant: "danger",
        text: registroMessage[e.code] || "Ha ocurrido un error",
        duration: 0,
      });
      setLoading(false);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          label="Nombre"
          placeholder="Ingrese nombre"
          register={{ ...register("nombre", { required: true }) }}
          errors={errors}
          name="nombre"
        />
        <Input
          type="text"
          label="Apellido"
          placeholder="Ingrese apellido"
          register={{ ...register("apellido") }}
          errors={errors}
          name="apellido"
        />
        <Input
          type="email"
          label="Email"
          placeholder="Ingrese email"
          register={{ ...register("email", { required: true }) }}
          errors={errors}
          name="email"
        />
        <Input
          type="password"
          label="Contraseña"
          placeholder="Ingrese su password"
          register={{
            ...register("password", {
              required: true,
              minLength: 6,
              maxLength: 12,
            }),
          }}
          errors={errors}
          name="password"
        >
          <Form.Text className="text-muted">
            {errors?.password?.type === "minLength" && (
              <div>Debe introducir al menos 6 caracteres</div>
            )}
            {errors?.password?.type === "maxLength" && (
              <div>Debe introducir como maximo 12 caracteres</div>
            )}
          </Form.Text>
        </Input>

        <ButtonWithLoading type="submit" variant="primary" loading={loading}>
          Registrarme
        </ButtonWithLoading>
      </Form>
      <AlertNavigation {...alert} />
    </div>
  );
}

export default Registro;

//onclick=""
//onClick={}

//onchange=""
//onChange={}
