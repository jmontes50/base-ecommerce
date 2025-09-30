import { create } from "zustand";
import { saveStorage, getStorage } from "../utils/localStorageUtils";
import axios from "axios";
import { toast } from "react-toastify";

const useAuthStore = create((set) => ({
  //getStorage deberia darme un objeto
  user: getStorage("auth")?.user || null, //info user
  token: getStorage("auth")?.token || null, //jwt
  isLogged: getStorage("auth")?.isLogged || false,//para saber si esta logueado o no
  //userInfo tendra el nombre, email, password
  registerUser: async (userInfo) => {
    try {
      const response = await axios.post('https://simple-api-2ivd.onrender.com/auth/register', userInfo)
      // console.log(response)
      if(response.status === 201){
        toast.success("usuario registrado!!!")
        return true; //no estoy utilizando set, este true ira al componente
      } else {
        throw new Error("Error al registrarse!, intente de nuevo");
      }
    } catch (error) {
      console.log(error)
      toast.error("Error al registrarse, verifique su información")
      throw error
    }
  },
  loginUser: async (email, password) => {
    try {
      const response = await axios.post('https://simple-api-2ivd.onrender.com/auth/login', { email, password});
      if(response.status === 200) {
        // console.log(response)
        const { token, usuario } = response.data;
        saveStorage("auth", { user: usuario, token: token, isLogged: true } );
        set({ user: usuario, token: token, isLogged: true });
        toast.success("Bienvenido!!!");
        return true
      } else {
        throw new Error ("Error al ingresar, intente de nuevo")
      }
    } catch (error) {
      console.log(error)
      toast.error("Error al ingresar, verifique sus datos");
      throw error
    }
  }
}))

export default useAuthStore;
