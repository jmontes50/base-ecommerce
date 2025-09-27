import { create } from "zustand";
import { saveStorage } from "../utils/localStorageUtils";
import axios from "axios";
import { toast } from "react-toastify";

const useAuthStore = create((set) => ({
  user: null, //info user
  token: null, //jwt
  isLogged: false,//para saber si esta logueado o no
  //userInfo tendra el nombre, email, password
  registerUser: async (userInfo) => {
    try {
      const response = await axios.post('https://simple-api-2ivd.onrender.com/auth/register', userInfo)
      console.log(response)
    } catch (error) {
      console.log(error)
      toast.error("Error al registrarse, verifique su información")
    }
  }
}))

export default useAuthStore;
