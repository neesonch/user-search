import { useEffect } from "react";
import { useUserStore } from "./store/userStore";
import { UserCardList } from "./components/UserCardsList/UserCardList";
import { SearchControls } from "./components/SearchControls/SearchControls";
import { type User } from "./types";

function App() {
  const { users, getUsers, setUsers, isUsersFetching, setUsersFetching } =
    useUserStore();

  useEffect(() => {
    setUsersFetching(true);
    getUsers().then((data) => {
      const sortedUsers: User[] = data.sort((a: User, b: User) =>
        a.name.last > b.name.last ? 1 : -1
      );
      setUsers(sortedUsers);
      setUsersFetching(false);
    });
  }, []);

  return (
    <>
      <SearchControls />
      {isUsersFetching ? (
        <h3>{"Getting users..."}</h3>
      ) : (
        <UserCardList users={users} />
      )}
    </>
  );
}

export default App;
