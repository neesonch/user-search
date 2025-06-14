import { create } from "zustand";

interface UserState {
  users: string[];
  setUsers: (users: string[]) => void;
  getUsers: () => void;
}

export const useUserStore = create<UserState>()((set) => ({
  users: ["Alice", "Bob", "Steven"],
  setUsers: (users: string[]) => set(() => ({ users })),
  getUsers: async () => {
    const response = await fetch("https://randomuser.me/api/?results=50");
    const json = await response.json();
    console.log(json); //DEBUG
  },
}));
