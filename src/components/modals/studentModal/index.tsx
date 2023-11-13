"use client";
import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import IStudents from "@/types/IStudents";
import IStudentsData from "@/types/IStudentsData";
import axios from "axios";
import moment from "moment";
import { useRouter } from "next/navigation";

interface IModal {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  title: string;
}

const StudentsModal = ({ isOpen, setIsOpen, title }: IModal) => {
  const router = useRouter();
  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const onFinish = (values: any) => {
    console.log("Success heree:", values);
    axios
      .post("http://localhost:3000/api/students/create", values)
      .then((res) => {
        console.log("resddd dataa", res);
      })
      .catch((err) => {
        console.log("course error");
      })
      .finally(() => {
        router.refresh();
        // clear inputts
        setIsOpen(false);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="flex flex-col justify-center items-center bg-white rounded-[20px] px-[30px] pt-[52px] pb-[29px] w-full max-w-[477px] "
      >
        <h2 className="font-[montserrat] font-[600] text-[22px] leading-[27px] mb-[9px] text-primaryText">
          {title}
        </h2>
        <Form.Item<IStudentsData>
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your curse name!" }]}
          className="w-full my-custom-form-item  "
        >
          <Input />
        </Form.Item>
        <Form.Item<IStudentsData>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
          className="w-full my-custom-form-item  "
        >
          <Input />
        </Form.Item>
        <Form.Item<IStudentsData>
          label="Phone"
          name="phone"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
          className="w-full my-custom-form-item  "
        >
          <Input />
        </Form.Item>

        <Form.Item<IStudentsData>
          label="Personal Number"
          name="personal_number"
          rules={[{ required: true, message: "Please input your start date!" }]}
          className="w-full my-custom-form-item  "
        >
          <Input />
        </Form.Item>

        <Form.Item<IStudentsData>
          label="Date of addmission"
          name="dateOfAdmission"
          rules={[{ required: true, message: "Please input your end date!" }]}
          className="w-full  my-custom-form-item !mb-[30px]"
        >
          <Input />
        </Form.Item>

        <Form.Item className="my-custom-form-item w-full bg-primary rounded ">
          <Button
            type="primary"
            htmlType="submit"
            className="w-full   font-[500] text-[14px]  py-[14px] h-auto"
          >
            ADD
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default StudentsModal;
