import Productos from "../Components/Productos";
import firebase from "../Config/firebase";
import home from "./home.module.css";

function Home() {

  return (
    <div className="">
      <h1 className={home.title}>Entrega Final Curso ReactJS</h1>
      <Productos />
    </div>
  );
}

export default Home;
