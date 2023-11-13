import React, { useState } from "react";
import { Modal } from "antd";
import axios from "axios";

interface IModalDelete {
  deleteModalOpen: boolean;
  setDeleteModalOpen: (val: boolean) => void;
  courseId: number | undefined;
  type?: string;
}

const DeleteModal = ({
  deleteModalOpen,
  setDeleteModalOpen,
  courseId,
  type,
}: IModalDelete) => {
  const handleOk = () => {
    const reqType = type === "students" ? "students" : "courses";
    axios
      .delete(`http://localhost:3000/api/${reqType}/delete/${courseId}`)
      .then((res) => {
        console.log("resddd dataa", res);
      })
      .catch((err) => {
        console.log("course error");
      })
      .finally(() => {
        setDeleteModalOpen(false);
      });
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setDeleteModalOpen(false);
  };

  return (
    <Modal
      title="Title"
      open={deleteModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      className="customModalStyle"
      centered
    >
      <p>{"Do you want to delete?"}</p>
    </Modal>
  );
};

export default DeleteModal;
