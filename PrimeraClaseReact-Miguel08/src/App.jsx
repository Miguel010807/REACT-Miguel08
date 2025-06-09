import "./App.css";
import Employees from "./components/Employees";
import { Users } from "./components/Users";
//siempreque le import sea 'nombrado' van llaves

function App() {
  // el componente es una funcion que devuelve contenido rederizable
  // el componente siempre arranca con mayuscula

  // npm install <--- para instalar dependencias
  // npm run dev <--- para correr el pograma

  return (
    <>
      <Users name="Miguel" />
      hola mundo
      <Employees />
    </>
  );
}

export default App;
