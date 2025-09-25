import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { saveStorage, getStorage } from "../utils/localStorageUtils";

const KEY_CART = "cart";

//necesitamos create y dentro un callback con set para manejar el store
//devtools es opcional si queremos ver que esta pasando con la extensión de redux
const useCartStore = create(devtools((set) => ({
  cart: getStorage(KEY_CART) || [], //si encuentra algo en el LS sera su estado inicial si no será un []
  addProductToCart: (product) => {
    set((state) => {
      const temporalCart = [...state.cart, product]; //copiamos el carrito

      saveStorage(KEY_CART, temporalCart);

      //retornamos el cambio que deseamos se aplique
      return {
        cart: temporalCart
      }
      //agregamos los valores para devtools
    }, false, "cart/addProductToCart")
  }
})))

export default useCartStore;
