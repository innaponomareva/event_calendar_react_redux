import React, { useEffect } from "react";
import { Layout } from "antd";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/IUser";

const App: React.FC = () => {
  const { setUser, setIsAuth } = useActions();

  useEffect(() => {
    if(localStorage.getItem('AUTH')){
      setUser({username: localStorage.getItem('USERNAME')} as IUser);
      setIsAuth(true);
    }
  },[setIsAuth, setUser])

  return (
    <Layout>
      <NavBar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  );
};

export default App;
