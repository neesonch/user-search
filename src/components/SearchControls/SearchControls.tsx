import { useUserStore } from "../../store/userStore";

export const SearchControls = () => {
  const { searchTerm, setSearchTerm } = useUserStore();

  return (
    <div>
      <input
        placeholder="Search users"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};
