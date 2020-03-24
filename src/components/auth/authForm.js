import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { userPostFetch } from "../../store/author/actions";
import { userPostRegistration } from "../../store/registr/actions";

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

export function RegistrationForm(props) {
  const onFinish = value => {
    props.userPostRegistration({
      Email: value.Email,
      Password: value.Password
    });
    console.log(value);
  };
  return (
    <Form
      {...formItemLayout}
      name="register"
      onFinish={onFinish}
      scrollToFirstError>
      <Form.Item
        name="Email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!"
          },
          {
            required: true,
            message: "Please input your E-mail!"
          }
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        name="Password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!"
          }
        ]}
        hasFeedback >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["Password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!"
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue("Password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                "The two passwords that you entered do not match!"
              );
            }
          })
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}

const mapDispatchToProps = dispatch => ({
  userPostRegistration: userInfo => dispatch(userPostRegistration(userInfo))
});

export default connect(null, mapDispatchToProps)(RegistrationForm);
