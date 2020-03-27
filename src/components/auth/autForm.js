import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "../../App.css";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userPostFetch } from "../../store/registr/actions";
import { userPostFetchGet } from "../../store/registr/actions";

const NormalLoginForm = props => {
  const { userPostFetch, userPostFetchGet } = props;
  const onFinish = value => {
    userPostFetch(value);
    userPostFetchGet();
  };
  return (
    <div>
      <Form name="normal_login" className="login-form" onFinish={onFinish}>
        <Form.Item
          name="Email"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="Password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="Password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            style={{ margin: 2 }}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or
         
            <Link style={{ margin: 2 }} to="/aut">
              register now!
            </Link>
          
        </Form.Item>
      </Form>
    </div>
  );
};

const mapDispatchToProps = {
  userPostFetch,
  userPostFetchGet
};

export default connect(null, mapDispatchToProps)(NormalLoginForm);
