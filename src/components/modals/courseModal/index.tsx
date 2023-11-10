"use client";

import React, { useState } from "react";

import { Button, Form, Input, Modal } from "antd";
import ICourseData from "@/types/ICourseData";

interface IModal {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  title: string;
}

const CourseModal = ({ isOpen, setIsOpen, title }: IModal) => {
  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel}>
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
        className="flex flex-col justify-center items-center bg-white rounded-[20px] px-[30px] pt-[52px] pb-[29px] w-full max-w-[477px] "
      >
        <h2 className="font-[montserrat] font-[600] text-[22px] leading-[27px] mb-[9px] text-primaryText">
          {title}
        </h2>
        <Form.Item<ICourseData>
          label="Course Name"
          name="coursename"
          rules={[{ required: true, message: "Please input your curse name!" }]}
          className="w-full my-custom-form-item  "
        >
          <Input />
        </Form.Item>
        <Form.Item<ICourseData>
          label="Level"
          name="level"
          rules={[{ required: true, message: "Please input your Level!" }]}
          className="w-full my-custom-form-item  "
        >
          <Input />
        </Form.Item>
        <Form.Item<ICourseData>
          label="Instructor"
          name="instructor"
          rules={[{ required: true, message: "Please input your Instructor!" }]}
          className="w-full my-custom-form-item  "
        >
          <Input />
        </Form.Item>

        <Form.Item<ICourseData>
          label="Start Date"
          name="startDate"
          rules={[{ required: true, message: "Please input your start date!" }]}
          className="w-full my-custom-form-item  "
        >
          <Input />
        </Form.Item>

        <Form.Item<ICourseData>
          label="End Date"
          name="endDate"
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

export default CourseModal;
