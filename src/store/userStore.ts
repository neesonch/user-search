import { create } from "zustand";
import { type User } from "../types";

interface UserState {
  users: User[];
  setUsers: (users: User[]) => void;
  getUsers: () => Promise<[]>;
  isUsersFetching: boolean;
  setUsersFetching: (isFetching: boolean) => void;
}

export const useUserStore = create<UserState>()((set) => ({
  users: [],
  setUsers: (users: User[]) => set(() => ({ users })),
  isUsersFetching: false,
  setUsersFetching: (isFetching: boolean) =>
    set(() => ({ isUsersFetching: isFetching })),
  getUsers: async () => {
    const response = await fetch("https://randomuser.me/api/?results=50");
    const json = await response.json();
    return json.results;
  },
}));
