interface ICard {
  svg: any;
  title: string;
  totalNumber: number;
  bgColor: string;
}

const InfoCard = ({ svg, title, totalNumber, bgColor }: ICard) => {
  return (
    <div
      className="flex flex-col  max-w-[255px] w-full justify-between p-5 gap-[15px] rounded-lg"
      style={{ backgroundColor: bgColor }}
    >
      {svg}
      <span className="font-[500] text-[14px] text-primaryTextLight">
        {title}
      </span>

      <span className="font-[700] text-[30px] text-primaryText text-end">
        {totalNumber}
      </span>
    </div>
  );
};

export default InfoCard;
