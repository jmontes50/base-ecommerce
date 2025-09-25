import { create } from "zustand";
import { devtools } from "zustand/middleware";

//necesitamos create y dentro un callback con set para manejar el store
//devtools es opcional si queremos ver que esta pasando con la extensión de redux
const useCartStore = create(devtools((set) => ({
  cart: [],
  addProductToCart: (product) => {
    set((state) => {
      const temporalCart = [...state.cart, product]; //copiamos el carrito
      //retornamos el cambio que deseamos se aplique
      return {
        cart: temporalCart
      }
      //agregamos los valores para devtools
    }, false, "cart/addProductToCart")
  }
})))

export default useCartStore;
