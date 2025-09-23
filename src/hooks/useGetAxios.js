import { useState, useEffect } from "react";
import axios from "axios";

//un custom hook va a ser una función y lo mas común es que retorne el estado que esta manejando
//los custom hook se nombran con el prefijo "use"
const useGetAxios = (url) => {
  const [data, setData] = useState(null); //un estado como lo hariamos en un componente
  const [loading, setLoading] = useState(true); //si esta cargando
  const [error, setError] = useState(null)

  useEffect(() => { //para hacer una petición como lo hariamos en un componente
    //es donde armaremos nuestra petición
    const requestData = async () => {
      try {
        const response = await axios.get(url); //hacemos la peticion GET con axios
        // y si todo va bien, actualizamos el estado interno
        setLoading(false); //ya termino de cargar
        setData(response.data);
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    }
    requestData();
    //si es que la URL cambia se ejecutara otra vez el useEffect
  }, [url]) //esto va a ser muy útil después

  return { data, loading, error }
}

export default useGetAxios;
