import { DateTimePicker } from "@mui/x-date-pickers";
import { MdOutlineClose } from "react-icons/md";
import { ModalProps } from "./interface";
import { updateDate } from "../../helpers/firebase";

const Modal: React.FC<ModalProps> = ({ targetDate, setIsOpen }) => {
  return (
    <div className="fixed w-full h-screen flex flex-col justify-center items-center bg-black/75">
      <div className="bg-slate-50 p-4 rounded-xl shadow-md">
        <DateTimePicker
          label="Reunion time picker"
          onChange={(newValue) => {
            targetDate.current = newValue;
            if (!newValue) return;
            updateDate(newValue.toString());
          }}
        />
        <button className="h-full" onClick={() => setIsOpen(false)}>
          <MdOutlineClose className="text-3xl ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
