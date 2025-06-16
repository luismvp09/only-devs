import { useMutation } from "@tanstack/react-query"
import { useAuthStore } from "../store/AuthStore"
import { toast } from "sonner"

export const useCrearUsuarioYSesionMutate = () => {
    const { createUserYLogin, credenciales } = useAuthStore()
    return useMutation({
        mutationKey: ['inicial con email test'],
        mutationFn: async () => {
            await createUserYLogin({
                email: credenciales.email,
                password: credenciales.password
            })
        },
        onError: (error) => {
            toast.error("Error al crear usuario y sesión:", `${error.message}`)
        },
        onSuccess: () => {
            toast.success("Usuario creado y sesión iniciada exitosamente")
        }
    })
}