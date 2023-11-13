"use client";

import React, { useState } from "react";
import { Button, DatePicker, Form, Input, Modal } from "antd";
import ICourseData from "@/types/ICourseData";
import axios from "axios";
import { useRouter } from "next/navigation";
import moment from "moment";

interface IModal {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  title: string;
}

const CourseModal = ({ isOpen, setIsOpen, title }: IModal) => {
  const router = useRouter();
  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const onFinish = (values: any) => {
    const data = {
      ...values,
      end_date: moment(values.end_date).format("YYYY-MM-DD"),
      start_date: moment(values.start_date).format("YYYY-MM-DD"),
    };

    console.log("Success heree:", data);
    axios
      .post("http://localhost:3000/api/courses/create", data)
      .then((res) => {
        console.log("resddd dataa", res);
      })
      .catch((err) => {
        console.log("course error");
      })
      .finally(() => {
        // clear inputts
        setIsOpen(false);
        router.refresh();
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
        <Form.Item<ICourseData>
          label="Course Name"
          name="course_name"
          rules={[{ required: true, message: "Please input your curse name!" }]}
          className="w-full my-custom-form-item  "
        >
          <Input />
        </Form.Item>
        <Form.Item<ICourseData>
          label="Level"
          name="course_difficulty"
          rules={[{ required: true, message: "Please input your Level!" }]}
          className="w-full my-custom-form-item  "
        >
          <Input />
        </Form.Item>
        <Form.Item<ICourseData>
          label="Instructor"
          name="teacher"
          rules={[{ required: true, message: "Please input your Instructor!" }]}
          className="w-full my-custom-form-item  "
        >
          <Input />
        </Form.Item>

        <Form.Item<ICourseData>
          label="Start Date"
          name="start_date"
          rules={[{ required: true, message: "Please input your start date!" }]}
          className="w-full my-custom-form-item  "
        >
          <DatePicker />
        </Form.Item>

        <Form.Item<ICourseData>
          label="End Date"
          name="end_date"
          rules={[{ required: true, message: "Please input your end date!" }]}
          className="w-full  my-custom-form-item !mb-[30px]"
        >
          <DatePicker />
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
