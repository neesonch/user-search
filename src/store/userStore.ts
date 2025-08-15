import { create } from "zustand";
import { type User, type SortValue } from "../types";
import { sortValues } from "../consts";

interface UserState {
  users: User[];
  setUsers: (users: User[]) => void;
  getUsers: () => Promise<[]>;
  isUsersFetching: boolean;
  setUsersFetching: (isFetching: boolean) => void;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  countryFilter: string;
  setCountryFilter: (countryFilter: string) => void;
  sortValue: SortValue;
  setSortValue: (sortValue: SortValue) => void;
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
  searchTerm: "",
  setSearchTerm: (searchTerm: string) => set(() => ({ searchTerm })),
  countryFilter: "",
  setCountryFilter: (countryFilter: string) => set(() => ({ countryFilter })),
  sortValue: sortValues.LAST_NAME_ASC,
  setSortValue: (sortValue: SortValue) => set(() => ({ sortValue })),
}));
