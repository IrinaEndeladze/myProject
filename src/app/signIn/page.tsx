"use client";
import React from "react";
import { Button, Form, Input } from "antd";
import { authenticate } from "@/app/lib/actions";
import UserType from "@/types/IUser";

const SignIn = () => {
  const onFinish = async (values: any) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });
    try {
      const user = await authenticate(formData);
      console.log("User authenticated:", user);
    } catch (error) {
      console.error("Authentication failed here:", error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex min-h-screen  items-center justify-center p-24 bg-custom-gradient">
      <Form
        name="basic"
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

        <Form.Item<UserType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
          className="w-full my-custom-form-item  "
        >
          <Input />
        </Form.Item>

        <Form.Item<UserType>
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
            className="w-full  font-[montserrat] font-[500] text-[14px]  py-[14px] h-auto"
          >
            SIGN IN
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
