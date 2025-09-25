import { useState } from "react";
import useGetAxios from "../../hooks/useGetAxios";
import ProductCard from "../ui/ProductCard";
import Loading from "../ui/Loading";
import useCartStore from "../../stores/useCartStore";

const MOCK_PRODUCTS = [
  {
    id: 1,
    nombre: "Camiseta Básica",
    descripcion: "Camiseta de algodón 100% suave y cómoda.",
    precio: 19.99,
    stock: 12,
    sku: "TSHIRT-001",
    activo: true,
    imagen:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    categoriaId: 1,
  },
  {
    id: 2,
    nombre: "Zapatillas Urbanas",
    descripcion: "Diseño moderno y suela antideslizante.",
    precio: 59.9,
    stock: 0,
    sku: "SHOES-042",
    activo: true,
    imagen:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    categoriaId: 2,
  },
  {
    id: 3,
    nombre: "Mochila Compacta",
    descripcion: "Ideal para viajes cortos y uso diario.",
    precio: 34.5,
    stock: 5,
    sku: "BAG-777",
    activo: true,
    imagen:
      "https://images.unsplash.com/photo-1514477917009-389c76a86b68?q=80&w=800&auto=format&fit=crop",
    categoriaId: 3,
  },
];

const HomeView = () => {
  const [page, setPage] = useState(1);
  //Los customhook tienen que usarse dentro de los componentes
  const { data, loading, error } = useGetAxios(
    `https://simple-api-2ivd.onrender.com/productos?page=${page}&limit=6`
  );

  const { cart, addProductToCart } = useCartStore();

  const totalPages = data?.meta?.totalPages;

  const previousPage = () => {
    if(page > 1) { //si puede reducirse a 1
      setPage(page - 1)
    }
  }

  const nextPage = () => {
    if(page < totalPages) { //si todavia no llego al máximo de páginas
      setPage(page + 1)
    }
  }

  if(loading){
    return <Loading />
  }

  if(error){
    return (<h2 className="text-xl p-4">
      Ocurrio un error, por favor intente en otro momento
    </h2>)
  }

  return (
    <div className="max-w-7xl mx-auto px-3 md:px-6 py-6">
      <div className="hero bg-base-200 rounded-box">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold">
              Bienvenido a nuestra tienda
            </h1>
            <p className="py-4 text-base-content/70">
              Descubre productos seleccionados con diseño elegante y la mejor
              calidad.
            </p>
            <div className="join w-full max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Buscar productos"
                className="input input-bordered join-item w-full"
              />
              <button className="btn btn-primary join-item">Buscar</button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-8 mb-4 text-xl font-semibold">Destacados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* operador de encadenamiento opcional */}
        {/* validamos que la propiedad productos exista, recodermos que data originalmente es null */}
        {/* aplicamos un renderizado de listas para mostrar los productos de la API */}
        {data?.productos && data.productos.map((item) => (
          <ProductCard key={item.id} producto={item} addToCart={addProductToCart} />
        ))}
      </div>
      {/* botones */}
      <div className="flex justify-between">
        <button className="btn btn-primary" onClick={previousPage}>
          Página Previa
        </button>
        <button className="btn btn-primary" onClick={nextPage}>
          Siguiente Página
        </button>
      </div>
    </div>
  );
};

export default HomeView;
