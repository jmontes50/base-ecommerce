import useCartStore from "../../stores/useCartStore";

const CartView = () => {
  const { cart } = useCartStore();

  return (
    <div className="max-w-7xl mx-auto px-3 md:px-6 py-6">
      <h2 className="text-4xl font-semibold mb-5">
        Prepara tu orden
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* resumen carrito */}
        <div>

        </div>
        {/* form */}
        <div>

        </div>
      </div>
    </div>
  )
}

export default CartView
