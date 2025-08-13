import { useEffect } from "react";
import { useUserStore } from "./store/userStore";
import { UserCardList } from "./components/UserCardsList/UserCardList";
import { SearchControls } from "./components/SearchControls/SearchControls";

function App() {
  const { users, getUsers, setUsers, isUsersFetching, setUsersFetching } =
    useUserStore();

  useEffect(() => {
    setUsersFetching(true);
    getUsers().then((data) => {
      setUsers(data);
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
