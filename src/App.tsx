import { useEffect } from "react";
import { useUserStore } from "./store/userStore";

function App() {
  const { users, getUsers } = useUserStore();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      {"Hello world!"}
      {users.map((user) => (
        <p>{user}</p>
      ))}
    </>
  );
}

export default App;
