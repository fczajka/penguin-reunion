import { ButtonProps } from "./interface";

const Button: React.FC<ButtonProps> = ({ callback, style, children }) => {
  return (
    <button className={style} onClick={callback}>
      {children}
    </button>
  );
};

export default Button;
