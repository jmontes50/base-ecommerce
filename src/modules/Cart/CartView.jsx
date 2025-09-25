import useCartStore from "../../stores/useCartStore";

const CartView = () => {
  const { cart } = useCartStore();

  return (
    <div>CartView</div>
  )
}

export default CartView
