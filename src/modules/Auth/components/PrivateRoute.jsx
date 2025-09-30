import useAuthStore from "../../../stores/useAuthStore";
import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const { isLogged } = useAuthStore();
  console.log("viendo si esta logueado", isLogged);

  return (
  <>
  {/* estamos validando a partir del store si estamos logueados
  o  no, Si estamos logueados nos muestra children si no
  Navigate hacia login todo mediante un operador ternario */}
    {isLogged ? props.children : <Navigate to="/login" />}
  </>
  );
};

export default PrivateRoute;
