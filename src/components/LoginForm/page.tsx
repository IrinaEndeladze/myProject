import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  email?: string;
  password?: string;
};

const LoginForm = () => {
  return (
    // <div className="flex justify-center items-center bg-white rounded-[20px]">
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      //   style={{ maxWidth: 900 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="flex flex-col justify-center items-center bg-white rounded-[20px] px-[30px] pt-[126px] pb-[58px] w-full"
    >
      <h1 className="h-[30px]">Sign in</h1>
      <span>Enter your credentials to access your account</span>

      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="hover:bg-primary w-full"
        >
          SIGN IN
        </Button>
      </Form.Item>
    </Form>
    // </div>
  );
};

export default LoginForm;
