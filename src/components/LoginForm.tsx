import React, { useState } from "react";
import { Input, Form, Button, Row } from "antd";
import { rules } from "../utils/rules";
//import { useDispatch } from "react-redux";
//import { AuthActionCreators } from "../store/reducers/auth/authActionCreators";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const LoginForm: React.FC = () => {
  const { error, isLoading } = useTypedSelector((state) => state.authReducer);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const dispatch = useDispatch();
  const { login } = useActions();

  const submit = () => {
    login(username, password);
  };
  return (
    <Form onFinish={submit}>
      {error && <div style={{ color: "tomato" }}>{error}</div>}
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required("Please input your username!")]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required("Please input your password!")]}
      >
        <Input
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>

      <Row>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Enter
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default LoginForm;
