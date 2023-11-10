"use client";

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

const SignIn = () => {
  return (
    // <div className="flex justify-center items-center bg-white rounded-[20px]">
    <div className="flex min-h-screen  items-center justify-center p-24 bg-custom-gradient">
      <Form
        name="basic"
        // labelCol={{ span: 20 }}
        // wrapperCol={{ span: 20 }}
        // style={{ maxWidth: 900 }}
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="flex flex-col justify-center items-center bg-white rounded-[20px] px-[30px] pt-[126px] pb-[58px] w-full max-w-[475px] "
      >
        <h2 className="font-[montserrat] font-[600] text-[22px] leading-[27px] mb-[9px] text-primaryText">
          Sign in
        </h2>
        <span className=" font-[montserrat] font-[400] text-[14px] leading-[17px] mb-[50px] text-primaryTextLight">
          Enter your credentials to access your account
        </span>

        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
          className="w-full my-custom-form-item  "
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
          className="w-full  my-custom-form-item !mb-[30px]"
        >
          <Input.Password />
        </Form.Item>

        <Form.Item className="my-custom-form-item w-full bg-primary rounded ">
          <Button
            type="primary"
            htmlType="submit"
            className="w-full  text-green font-[montserrat] font-[500] text-[14px]  py-[14px] h-auto"
          >
            SIGN IN
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
