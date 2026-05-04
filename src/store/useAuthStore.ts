import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserAccount = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

type AuthResponse = {
  success: boolean;
  message: string;
};

type AuthState = {
  users: UserAccount[];
  currentUserEmail: string | null;
  registerUser: (user: UserAccount) => AuthResponse;
  login: (email: string, password: string) => AuthResponse;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      users: [],
      currentUserEmail: null,
      registerUser: (user) => {
        const exists = get().users.some((account) => account.email.toLowerCase() === user.email.toLowerCase());
        if (exists) {
          return { success: false, message: "Este e-mail já está cadastrado." };
        }

        set((state) => ({
          users: [user, ...state.users],
          currentUserEmail: user.email,
        }));

        return { success: true, message: "Conta criada com sucesso." };
      },
      login: (email, password) => {
        const user = get().users.find((account) => account.email.toLowerCase() === email.toLowerCase());
        if (!user || user.password !== password) {
          return { success: false, message: "E-mail ou senha incorretos." };
        }

        set({ currentUserEmail: user.email });
        return { success: true, message: "Login realizado com sucesso." };
      },
      logout: () => set({ currentUserEmail: null }),
    }),
    {
      name: "appzap-auth",
      partialize: (state) => ({ users: state.users, currentUserEmail: state.currentUserEmail }),
    }
  )
);
