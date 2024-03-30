import React, { useCallback, useEffect, useState } from "react";
import { countDays, countHours, countMinutes, countSeconds } from "./helpers";

const CountdownTimer: React.FC = () => {
  const targetDate = new Date("2024-04-01T00:00:00").getTime();
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const calculateTimeLeft = useCallback(() => {
    const difference = targetDate - new Date().getTime();
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
    <div>
      <h1>Unill Penguins Reunite</h1>
      <div className="flex">
        <div className="flex flex-col">
          <div>{days}</div> <div>Days</div>{" "}
        </div>
        <div className="flex flex-col">
          <div>{hours}</div> <div>Hours</div>{" "}
        </div>
        <div className="flex flex-col">
          <div>{minutes}</div> <div>Minutes</div>{" "}
        </div>
        <div className="flex flex-col">
          <div>{seconds}</div> <div>Seconds</div>{" "}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
