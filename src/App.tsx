import { useCallback, useEffect, useRef, useState } from "react";
import { countDays, countHours, countMinutes, countSeconds } from "./helpers";
import { Card, Modal } from "./components";
import dayjs, { Dayjs } from "dayjs";

const App: React.FC = () => {
  const targetDate = useRef<Dayjs | null>(dayjs(null));
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const calculateTimeLeft = useCallback(() => {
    if (!targetDate.current) return;
    const difference =
      targetDate.current.toDate().getTime() - new Date().getTime();
    if (difference > 0) {
      setDays(countDays(difference));
      setHours(countHours(difference));
      setMinutes(countMinutes(difference));
      setSeconds(countSeconds(difference));
    }
  }, [targetDate]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [calculateTimeLeft]);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center font-primary bg-penguins bg-center bg-no-repeat bg-cover">
      <h1 className="font-secondary text-4xl lg:text-[3rem]">
        Untill Penguins Reunite
      </h1>
      <div className="flex justify-around w-5/6 my-12 lg:w-[36rem]">
        <Card time={days} unit="Days" />
        <Card time={hours} unit="Hours" />
        <Card time={minutes} unit="Minutes" />
        <Card time={seconds} unit="Seconds" />
      </div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-[#9595D2] rounded-xl shadow-md"
      >
        Change the Reunion Date
      </button>
      {isOpen && <Modal targetDate={targetDate} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default App;
