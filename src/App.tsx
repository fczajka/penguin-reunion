import { useCallback, useEffect, useRef, useState } from "react";
import {
  calcDiff,
  countDays,
  countHours,
  countMinutes,
  countSeconds,
} from "./helpers";
import { Card, Modal } from "./components";
import dayjs, { Dayjs } from "dayjs";
import { getReunionDate } from "./helpers/firebase";
import { CircularProgress } from "@mui/material";
import { Button } from "./components/Button";

const App: React.FC = () => {
  const targetDate = useRef<Dayjs | null>(dayjs(null));
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const checkReunionDate = async () => {
    const dates = await getReunionDate();
    targetDate.current = dayjs(dates[0].date);
  };

  const calculateTimeLeft = useCallback(async () => {
    if (!targetDate.current) return;
    const difference = calcDiff(targetDate.current);
    if (difference > 0) {
      setDays(countDays(difference));
      setHours(countHours(difference));
      setMinutes(countMinutes(difference));
      setSeconds(countSeconds(difference));
    }
  }, [targetDate]);

  useEffect(() => {
    checkReunionDate();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [calculateTimeLeft]);

  return (
    <div
      className={`w-full h-screen flex flex-col justify-center items-center font-primary bg-[url(./assets/penguins.svg)] bg-center bg-no-repeat bg-cover`}
    >
      <h1 className="font-secondary text-[1.7rem] lg:text-[3rem]">
        Untill Penguins Reunite
      </h1>
      {targetDate.current?.toDate().getDay() ? (
        <div className="animate-fade-in flex flex-col">
          <div className="flex justify-around w-11/12 my-12 lg:w-[36rem]">
            <Card time={days} unit="Days" />
            <Card time={hours} unit="Hours" />
            <Card time={minutes} unit="Minutes" />
            <Card time={seconds} unit="Seconds" />
          </div>
          <Button
            callback={() => setIsOpen(true)}
            style="px-4 py-2 bg-[#9595D2] rounded-xl shadow-md text-sm"
            children="Change the Reunion Date"
          ></Button>
        </div>
      ) : (
        <CircularProgress className="my-[4.4rem]" />
      )}
      {isOpen && <Modal targetDate={targetDate} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default App;
