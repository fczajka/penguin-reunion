import { CardProps } from "./interface";

const Card: React.FC<CardProps> = ({ time, unit }) => {
  return (
    <div className="flex flex-col items-center basis-1/4 px-4 py-2 mx-2 bg-[#9595D2] rounded-xl shadow-md">
      <div>{time}</div> <div>{unit}</div>
    </div>
  );
};

export default Card;
