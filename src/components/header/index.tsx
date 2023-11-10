"use client";

import { Input, Space } from "antd";
import { SearchProps } from "antd/es/input";
import { BackIcon, NotificationIcon } from "../../../public/Icons/Icons";

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const { Search } = Input;

const Header = () => {
  return (
    <div className="flex justify-between w-full bg-white items-center py-3 pl-[30px] pr-[51px]">
      <BackIcon />
      <div className=" flex gap-[27px] items-center ">
        <Search
          placeholder="Search..."
          onSearch={onSearch}
          style={{ width: 200 }}
        />
        <NotificationIcon />
      </div>
    </div>
  );
};

export default Header;
