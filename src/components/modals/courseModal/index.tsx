"use client";
import React, { useEffect, useState } from "react";
import { Button, DatePicker, Form, Input, Modal } from "antd";
import ICourseData from "@/types/ICourseData";
import axios from "axios";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

interface IModal {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  title: string;
  courseId: number | undefined;
}

const CourseModal = ({ isOpen, setIsOpen, title, courseId }: IModal) => {
  const router = useRouter();
  const [requestBody, setRequestBody] = useState();
  const [form] = Form.useForm();

  useEffect(() => {
    axios
      .get(` http://localhost:3000/api/courses/${courseId}`)
      .then((res) => {
        setRequestBody(res?.data);
        form.setFieldsValue({
          ...res?.data,
          end_date: dayjs(res?.data?.end_date),
          start_date: dayjs(res?.data?.start_date),
        });
      })
      .catch((err) => {
        console.log("course error");
      })
      .finally(() => {});
  }, [isOpen]);

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const onFinish = (values: any) => {
    const data = {
      ...values,
      end_date: dayjs(values.end_date),
      start_date: dayjs(values.start_date),
    };
    if (courseId) {
      axios
        .put(`http://localhost:3000/api/courses/update/${courseId}`, data)
        .then((res) => {
          console.log("resddd dataa", res);
        })
        .catch((err) => {
          console.log("course error");
        })
        .finally(() => {
          setIsOpen(false);
          router.refresh();
        });
    } else {
      axios
        .post("http://localhost:3000/api/courses/create", data)
        .then((res) => {
          console.log("resddd dataa", res);
        })
        .catch((err) => {
          console.log("course error");
        })
        .finally(() => {
          setIsOpen(false);
          router.refresh();
        });
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form
        name="basic"
        form={form}
        layout="vertical"
        initialValues={requestBody}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="flex flex-col justify-center items-center bg-white rounded-[20px] px-[30px] pt-[52px] pb-[29px] w-full max-w-[477px] "
      >
        <h2 className="font-[montserrat] font-[600] text-[22px] leading-[27px] mb-[9px] text-primaryText">
          {courseId ? "edit" : "add"}
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
