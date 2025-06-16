import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";

export const useAuthStore = create((set) => ({
    credenciales: null,
    setCredenciales: (p) => set({ credenciales: p }),
    createUserYLogin: async (p) => {
        const { data } = await supabase.auth.signUp({
            email: p.email,
            password: p.password
        })
        return data.user;
    }
}))

export const useSubcription = create((set)=> {
    // Estado para la suscripción inicio del estado
    const store ={
        user: null,
    };
    // Listener(oyente) que se ejecuta una vez cuando se importa el store
     supabase.auth.getSession().then(({data:{ session}})=>{
        if(session?.user){
            set({ user: session.user });
        }
     })
     supabase.auth.onAuthStateChange((event, session) => {
        if(session?.user){
            set({ user: session.user });
        }
        else {
            set({ user: null });
        }
     })
     return store;
})