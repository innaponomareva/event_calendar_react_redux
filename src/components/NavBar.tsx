import React from "react";
import { useHistory } from "react-router-dom";
import { Layout, Row, Menu } from "antd";
import { RouteNames } from "../router";
import { useTypedSelector } from "../hooks/useTypedSelector";
//import { AuthActionCreators } from "../store/reducers/auth/authActionCreators";
//import { useDispatch } from "react-redux";
import { useActions } from "../hooks/useActions";

const NavBar: React.FC = () => {
  const router = useHistory();
  const { isAuth, user } = useTypedSelector((state) => state.authReducer);
  //const dispatch = useDispatch();
  const { logout } = useActions();

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>{user.username}</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => logout()} key={1}>
                L O G O U T
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key={1}>
              L O G I N
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default NavBar;
