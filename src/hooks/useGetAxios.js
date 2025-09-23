import { useState, useEffect } from "react";
import axios from "axios";

//un custom hook va a ser una función y lo mas común es que retorne el estado que esta manejando
//los custom hook se nombran con el prefijo "use"
const useGetAxios = (url) => {
  const [data, setData] = useState(null); //un estado como lo hariamos en un componente

  useEffect(() => { //para hacer una petición como lo hariamos en un componente
    //es donde armaremos nuestra petición
    const requestData = async () => {
      try {
        const response = await axios.get(url); //hacemos la peticion GET con axios
        // y si todo va bien, actualizamos el estado interno
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    requestData();
    //si es que la URL cambia se ejecutara otra vez el useEffect
  }, [url]) //esto va a ser muy útil después

  return { data }
}

export default useGetAxios;
