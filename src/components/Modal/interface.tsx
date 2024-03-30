import dayjs from "dayjs";
import { Dispatch, MutableRefObject } from "react";

export interface ModalProps {
  targetDate: MutableRefObject<dayjs.Dayjs | null>;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}
