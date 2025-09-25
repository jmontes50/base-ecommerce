import { useForm } from "react-hook-form";
import useCartStore from "../../stores/useCartStore";
import { toast } from "react-toastify";

const CartView = () => {
  const { cart } = useCartStore();
  // register, es una función para indicar a hook forms que maneje un input
  // handleSubmit, sirve para manejar el submit, nos pedirá una función
  // errors servirá para mostrar errores al usuario, required, formato
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleConfirmCart = (data) => {
    console.log(data); //podria reemplazar con un POST
    toast("Carrito Guardado!", {
      theme:"dark",
      type: "success"
    })
  };

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
        <div className="col-span-1">
          <form onSubmit={handleSubmit(handleConfirmCart)}>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Nombres y apellidos:</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Ej. Juan Perez"
                {...register("fullname", {
                  required: "Este campo es requerido",
                })}
              />
              {/* para acceder al mensaje de error podemos usar errors.nombrederegistro.message */}
              {errors && (
                <p className="label text-red-600 text-xs">
                  {errors?.fullname?.message}
                </p>
              )}
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Número de celular</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Ej. 9999999999"
                {...register("phone")}
              />
              {/* <p className="label">Optional</p> */}
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Dirección:</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Ej. Av. Lima"
                {...register("address", {
                  required: "Este campo también es obligatorio",
                  minLength: {
                    value: 4,
                    message: "La dirección no puede ser muy corta",
                  },
                  maxLength: {
                    value: 25,
                    message: "La dirección no puede ser muy larga",
                  },
                })}
              />
              {errors && (
              <p className="label text-red-600 text-xs">
                {errors?.address?.message}
              </p>
              )}
            </fieldset>
            <button className="btn btn-primary mt-4" type="submit">
              Confirmar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartView;
