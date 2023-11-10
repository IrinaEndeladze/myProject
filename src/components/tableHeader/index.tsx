import { Button } from "antd";
import { ArrowsIcon } from "../../../public/Icons/Icons";

interface IHeader {
  btnName: string;
  headerTitle: string;
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  setModalTitle: (val: string) => void;
}

const DataHeader = ({
  btnName,
  headerTitle,
  isOpen,
  setIsOpen,
  setModalTitle,
}: IHeader) => {
  return (
    <div className="w-full flex justify-between py-5 border-b border-primaryBg">
      <div className="text-[22px] font-[700] text-primaryText">
        {headerTitle}
      </div>
      <div className="flex items-center gap-[30px]">
        <ArrowsIcon />

        {btnName !== "hide" && (
          <Button
            onClick={() => {
              setIsOpen(!isOpen),
                setModalTitle(
                  btnName.includes("COURSE") ? "ADD COURSE" : "ADD STUDENT"
                );
            }}
            type="primary"
            className="w-full  text-white font-[500] text-[14px] py-[14px] bg-primary h-auto px-[30px]"
          >
            {btnName}
          </Button>
        )}
      </div>
    </div>
  );
};

export default DataHeader;
