import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuthContext } from "../Context/AuthContext";

function NavBar() {
  const { login, handleLogout, userInfo } = useAuthContext();
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand as={Link} to="/">
          Curso React
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            {login && (
              <>
                <Nav.Link as={Link} to="/contador">
                  Contador
                </Nav.Link>
                <NavDropdown title="Productos" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/productos/alta">
                    Alta
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link onClick={() => handleLogout()}>Salir</Nav.Link>
              </>
            )}
            {!login && (
              <>
                <Nav.Link as={Link} to="/alta">
                  Registrarme
                </Nav.Link>
                <Nav.Link as={Link} to="/ingresar">
                  Ingresar
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
        {login && <div>Hola {userInfo.name}</div>}
      </Navbar>
    </>
  );
}

export default NavBar;
