import { DateTimePicker } from "@mui/x-date-pickers";
import { MdOutlineClose } from "react-icons/md";
import { ModalProps } from "./interface";
import { updateDate } from "../../helpers/firebase";
import { useState } from "react";
import { sleep } from "../../helpers/helpers";
import { Button } from "../Button";

const Modal: React.FC<ModalProps> = ({ targetDate, setIsOpen }) => {
  const [wantsToClose, setWantsToClose] = useState<boolean>(false);
  return (
    <div
      className={`fixed w-full h-screen flex flex-col justify-center items-center bg-black/75 ${wantsToClose ? "animate-fade-out" : "animate-fade-in"}`}
    >
      <div
        className={`bg-slate-50 p-4 rounded-xl shadow-md ${wantsToClose ? "animate-fade-out-slide-down" : "animate-fade-in-slide-up"}`}
      >
        <DateTimePicker
          label="Reunion time picker"
          onChange={(newValue) => {
            targetDate.current = newValue;
            if (!newValue) return;
            updateDate(newValue.toString());
          }}
        />
        <Button
          style="h-full"
          callback={async () => {
            setWantsToClose(true);
            await sleep(450);
            setIsOpen(false);
          }}
          children={<MdOutlineClose className="text-3xl ml-2" />}
        />
      </div>
    </div>
  );
};

export default Modal;
