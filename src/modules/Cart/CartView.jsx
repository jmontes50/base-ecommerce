import useCartStore from "../../stores/useCartStore";

const CartView = () => {
  const { cart } = useCartStore();

  return (
    <div className="max-w-7xl mx-auto px-3 md:px-6 py-6">
      <h2 className="text-4xl font-semibold mb-5">Prepara tu orden</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="col-span-1 flex flex-col gap-4">
          {/* resumen carrito */}
          {cart.map((producto) => (
            <div className="flex" key={producto.id}>
              <div className="aspect-square w-16 overflow-hidden">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <h4 className="font-bold text-base">{producto.nombre}</h4>
                <p className="">S/ {producto.precio.toFixed(2)}</p>
                <p>{producto.sku}</p>
              </div>
            </div>
          ))}
        </div>

        {/* form */}
        <div></div>
      </div>
    </div>
  );
};

export default CartView;
