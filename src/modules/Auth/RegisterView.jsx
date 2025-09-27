// RegisterView.jsx
import { useForm } from "react-hook-form";
import useAuthStore from "../../stores/useAuthStore";
import { useNavigate } from "react-router-dom";

/**
 * Componente de registro con inputs NO controlados usando react-hook-form.
 * - Tailwind v4 para el layout (flex, gap, spacing)
 * - DaisyUI para estilos de inputs y botón (input, input-bordered, btn)
 *
 * Props opcionales:
 * - onSubmit: (data) => void  // Si no lo pasas, hará console.log(data)
 */
export default function RegisterView({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  const { registerUser } = useAuthStore();
  const navigate = useNavigate();

  const onSubmitInternal = async (data) => {
    // Simula acción externa; puedes reemplazar por llamada a tu API
    try {
      // console.log(data);
      await registerUser(data);
      reset(); // limpia el formulario al terminar
      navigate('/');
    } catch (e) {
      // Manejo básico de error (puedes mejorarlo según tu UX)
      console.error("Register error:", e);
    }
  };

  return (
    <section className="flex min-h-[60vh] items-center justify-center p-6">
      <form
        onSubmit={handleSubmit(onSubmitInternal)}
        noValidate
        className="flex w-full max-w-md flex-col gap-4 rounded-xl border bg-base-100 p-6 shadow-sm"
      >
        {/* Encabezado */}
        <header className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold">Crea tu cuenta</h1>
          <p className="text-sm opacity-70">
            Completa los campos para registrarte.
          </p>
        </header>

        {/* Nombre */}
        <div className="form-control">
          <label className="label" htmlFor="nombre">
            <span className="label-text">Nombre</span>
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu nombre"
            className="input input-bordered w-full"
            // Registro NO controlado: react-hook-form maneja el ref internamente
            {...register("nombre", {
              required: "El nombre es obligatorio",
              minLength: { value: 2, message: "Mínimo 2 caracteres" },
              maxLength: { value: 80, message: "Máximo 80 caracteres" },
              // trim básico en validación (opcional)
              validate: (v) =>
                (v?.trim?.().length ?? 0) > 0 || "No puede estar vacío",
            })}
            autoComplete="nombre"
          />
          {errors.nombre && (
            <span className="mt-1 text-sm text-error">
              {errors.nombre.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="form-control">
          <label className="label" htmlFor="email">
            <span className="label-text">Email</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="tucorreo@dominio.com"
            className="input input-bordered w-full"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                // Patrón simple; ajusta si necesitas RFC estricto
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Formato de email inválido",
              },
            })}
            autoComplete="email"
            inputMode="email"
          />
          {errors.email && (
            <span className="mt-1 text-sm text-error">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Password */}
        <div className="form-control">
          <label className="label" htmlFor="password">
            <span className="label-text">Contraseña</span>
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="input input-bordered w-full"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: { value: 8, message: "Mínimo 8 caracteres" },
              // Reglas opcionales: al menos 1 letra y 1 número
              // validate: (v) =>
              //   /[A-Za-z]/.test(v) && /\d/.test(v)
              //     ? true
              //     : "Usa letras y números",
            })}
            autoComplete="new-password"
          />
          {errors.password && (
            <span className="mt-1 text-sm text-error">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className={`btn btn-primary mt-2 ${isSubmitting ? "pointer-events-none opacity-80" : ""}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Registrando..." : "Crear cuenta"}
        </button>

        {/* Nota accesible */}
        <p className="text-xs opacity-60">
          Al registrarte, aceptas nuestros términos y políticas.
        </p>
      </form>
    </section>
  );
}
