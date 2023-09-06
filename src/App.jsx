import Contador from "./Pages/Contador.jsx";
import Home from "./Pages/Home.jsx";
import NavBar from "./Components/NavBar.jsx";
import Registro from "./Pages/Registro.jsx";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Detalle from "./Pages/Detalle.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Container from "react-bootstrap/Container";
import Login from "./Pages/Login.jsx";
import ProductosAlta from "./Pages/ProductosAlta.jsx";
import ProductosModificar from "./Pages/ProductosModificar.jsx";
import AuthProvider, { AuthContext } from "./Context/AuthContext.jsx";

function App() {
  // const { login } = useContext(AuthContext);
  return (
    <>
      <Router>
        <AuthProvider>
          <AuthContext.Consumer>
            {({ login }) => (
              <>
                <NavBar />
                <Container>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    {login && (
                      <>
                        <Route path="/contador" element={<Contador />} />
                        <Route
                          path="/productos/alta"
                          element={<ProductosAlta />}
                        />
                        <Route
                          path="/productos/modificar/:id"
                          element={<ProductosModificar />}
                        />
                      </>
                    )}
                    {!login && (
                      <>
                        <Route path="/alta" element={<Registro />} />
                        <Route path="/ingresar" element={<Login />} />
                      </>
                    )}

                    <Route path="/producto/:id" element={<Detalle />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Container>
              </>
            )}
          </AuthContext.Consumer>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
