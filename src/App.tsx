import { useEffect } from "react";
import { useUserStore } from "./store/userStore";
import { UserCards } from "./components/UserCards/UserCards";

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
      {isUsersFetching ? (
        <h3>{"Getting users..."}</h3>
      ) : (
        <UserCards users={users} />
      )}
    </>
  );
}

export default App;
