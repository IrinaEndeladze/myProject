import React, { FC } from "react";
import Image from "next/image";

interface UserAvatarProps {
  image?: any;
}

const UserAvatar: FC<UserAvatarProps> = ({ image }) => {
  return (
    <div className={"max-w-[141px]"}>
      <Image
        alt="default avatar"
        src={image}
        width={128}
        height={128}
        className="rounded-[100%] bg-red-800"
      />
      <div className="flex flex-col items-center justify-center mt-5 gap-[10px]">
        <p className="text-[17px] font-[700] text-primaryText">
          Irina endeladze
        </p>
        <p className="text-[14px] font-[500] text-primary  leading-[17px]">
          Admin
        </p>
      </div>
    </div>
  );
};

export default UserAvatar;
