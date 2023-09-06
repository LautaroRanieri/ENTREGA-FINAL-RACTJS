import { useForm } from "react-hook-form";
// import Button from "react-bootstrap/Button";
// import Form from 'react-bootstrap/Form';
import { Form } from "react-bootstrap";
import "./Registro.css";
import { login } from "../Services/authService";
import AlertNavigation from "../Components/AlertNavigation";
import ButtonWithLoading from "../Components/ButtonWithLoading";
import Input from "../Components/Input";
import { useState } from "react";
import { loginMessage } from "../Utils/errorMessage";
import { useAuthContext } from "../Context/AuthContext";

function Login() {
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
  const context = useAuthContext();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      console.log(data);
      const response = await login(data);
      console.log(
        "🚀 ~ file: Registro.jsx:18 ~ onSubmit ~ response:",
        response
      );
      setAlert({
        variant: "success",
        text: `Bienvenido/a ${response.name}`,
        duration: 3000,
        link: "/",
      });
      setTimeout(() => {
        context.handleLogin(response);
      }, 4000);

      setLoading(false);
    } catch (e) {
      console.log(e);
      setAlert({
        variant: "danger",
        text: loginMessage[e.code] || "Ha ocurrido un error",
        duration: 0,
      });
      setLoading(false);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          label="Email"
          placeholder="Ingrese su email"
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
          Ingresar
        </ButtonWithLoading>
      </Form>
      <AlertNavigation {...alert} />
    </div>
  );
}

export default Login;

//onclick=""
//onClick={}

//onchange=""
//onChange={}
