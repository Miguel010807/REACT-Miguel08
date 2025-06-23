import { Provider } from "../provider/Provider";

//los props son datos/funciones que podemos
//pasar de un componente al otro

export function User() {
  return (
    <>
      Hola
      <Provider name="Miguel" />
    </>
  );
}
