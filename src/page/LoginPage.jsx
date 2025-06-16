import { Icon } from '@iconify/react/dist/iconify.js'
import logo from '../assets/etiqueta.png'
import { useEffect, useState } from 'react';
import { useGenerarCodigoAleatorios } from '../hooks/useGenerarCodigoAleatorios';
import { useAuthStore } from '../store/AuthStore';
import { useCrearUsuarioYSesionMutate } from '../stack/LoginStack';
import { Toaster } from 'sonner';
import { useForm } from 'react-hook-form';



export const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { setCredenciales } = useAuthStore();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
      const {handleSubmit} = useForm()
    const {isPending,mutate} = useCrearUsuarioYSesionMutate();

    useEffect(() => {
        const response = useGenerarCodigoAleatorios();
        const correoCompleto = response + "@gmail.com";
        setCredenciales({
            email: correoCompleto,
            password: response
        })
        setEmail(correoCompleto);
        setPassword(response);
    }, []);



    return (
        <div className="flex h-screen w-full">
         <Toaster/>
            {/* Lado izquierdo - Banner azul */}

            <div className="hidden md:flex md:w-1/2 bg-[#00b0f0] flex-col justify-center items-center relative overflow-hidden">
                {/* Imagen de fondo con ondas */}

                <div className="z-10 text-white text-center px-8">
                    <div className="flex items-center justify-center mb-6 gap-3">
                        <img src={logo} className="h-10 w-10" />

                        <span className="text-4xl font-bold text-[#CCEFFC]">
                            Only<span className="text-[#ffffff]">Devs</span>{" "}
                        </span>
                    </div>
                    <h2 className="text-3xl font-semibold mb-2">
                        Regístrate para apoyar
                    </h2>
                    <h2 className="text-3xl font-semibold mb-2">a tus creadores</h2>
                    <h2 className="text-3xl font-bold">favoritos</h2>
                </div>
            </div>

            {/* Lado derecho - Formulario de inicio de sesión */}
            <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-16 py-8">
                <div className="w-full max-w-md">
                    <h1 className="text-2xl font-medium mb-6 text-center">
                        Iniciar sesión <span className="text-[#0091EA] text-xl">(modo invitado)</span>
                    </h1>


                    <form onSubmit={handleSubmit(mutate)}>

                        <div className="mb-4">
                            <input
                                value={email}
                                type="email"
                                placeholder="Correo"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00aff0]"

                            />
                        </div>

                        <div className="mb-4 relative">
                            <input
                                value={password}
                                type={showPassword ? "text" : "password"}
                                placeholder="Contraseña"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00aff0]"

                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                <Icon
                                    icon={showPassword ? "mdi:eye-off" : "mdi:eye"}
                                    className="text-xl"
                                />
                            </button>
                        </div>
                        <button
                            disabled={isPending}
                            type="submit"
                            className="w-full bg-gray-200 text-gray-500 font-medium py-3 rounded-full hover:bg-[#00AFF0] transition duration-200 cursor-pointer hover:text-white"
                        >
                            INICIAR SESIÓN
                        </button>
                    </form>

                    <div className="mt-4 text-xs text-gray-500 text-center">
                        Al iniciar sesión y usar OnlyFans, aceptas nuestros{" "}
                        <a href="#" className="text-[#00aff0]">
                            Términos de servicio
                        </a>{" "}
                        y{" "}
                        <a href="#" className="text-[#00aff0]">
                            Política de privacidad
                        </a>{" "}
                        y confirmas que tienes al menos 18 años.
                    </div>

                    <div className="mt-6 text-center">
                        <a href="#" className="text-[#00aff0] text-sm">
                            ¿Has olvidado la contraseña?
                        </a>
                        <div className="mt-1">
                            <a href="#" className="text-[#00aff0] text-sm">
                                Regístrate para OnlyFans
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
