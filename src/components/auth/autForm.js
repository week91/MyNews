import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "../../App.css";
import "antd/dist/antd.css";
import { userPostFetch } from "../../store/author/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";




const NormalLoginForm = props => {
  const onFinish = value => {
    console.log(value);
    props.userPostFetch(value);
  };
  return (
    <div>
      <Form name="normal_login" className="login-form" onFinish={onFinish}>
        <Form.Item
          name="Email"
          rules={[{ required: true, message: "Please input your Username!" }]}>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="Password"
          rules={[{ required: true, message: "Please input your Password!" }]}>
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="Password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button">
            Log in
          </Button>
          Or
          <a href="">
            <Link to="/aut">register now!</Link>
          </a>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
});

export default connect(null, mapDispatchToProps)(NormalLoginForm);
