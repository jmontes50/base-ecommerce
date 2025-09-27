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
      //Vamos a preguntar si existe el producto en cart
      // nos dará -1 si no encuentra nada de 0 a + con la posición del item
      const indexIfExists = state.cart.findIndex((item) => item.id === product.id);

      console.log(indexIfExists);
      //Si no existe, agregamos el producto como nuevo con una propiedad llamada cantidad que sea igual a 1.
      //Si ya existe, al producto existe le incrementaremos la propiedad cantidad en +1
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
