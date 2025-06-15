import { useEffect } from "react";
import { useUserStore } from "./store/userStore";
import { UserCard } from "./components/UserCard";

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
        users.map((user) => {
          return <UserCard user={user} key={user.login.uuid} />;
        })
      )}
    </>
  );
}

export default App;
