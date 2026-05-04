import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProfileData = {
  atendente: string;
  loja: string;
  link: string;
  pix: string;
};

type MessageModel = {
  id: string;
  title: string;
  content: string;
  createdAt: number;
};

type AppState = {
  profile: ProfileData;
  favorites: string[];
  models: MessageModel[];
  setProfile: (profile: ProfileData) => void;
  toggleFavorite: (messageId: string) => void;
  addModel: (model: MessageModel) => void;
};

const initialProfile: ProfileData = {
  atendente: "Seu nome",
  loja: "Sua loja",
  link: "https://appzap.com",
  pix: "0000 0000 0000 0000",
};

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      profile: initialProfile,
      favorites: [],
      models: [],
      setProfile: (profile) => set({ profile }),
      toggleFavorite: (messageId) =>
        set((state) => ({
          favorites: state.favorites.includes(messageId)
            ? state.favorites.filter((id) => id !== messageId)
            : [...state.favorites, messageId],
        })),
      addModel: (model) =>
        set((state) => ({ models: [model, ...state.models] })),
    }),
    {
      name: "appzap-storage",
      partialize: (state) => ({
        profile: state.profile,
        favorites: state.favorites,
        models: state.models,
      }),
    }
  )
);
