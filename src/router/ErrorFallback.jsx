import { useRouteError } from "react-router-dom";

export default function ErrorFallback () {
  const error = useRouteError();


  return (
    <>

    <h1>¡Ups! Algo salió mal.</h1>
    <p>Lo sentimos, se produjo un error inesperado.</p>
  </>
  );
}