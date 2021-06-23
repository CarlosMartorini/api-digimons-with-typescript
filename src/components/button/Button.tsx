import { ReactNode } from "react";
import { StyledButton } from "./Styles";

interface StyledButtonProps {
  children: ReactNode;
  deleted?: boolean;
  onClick: () => void;
}

const Button = ({ deleted = false, children, onClick }: StyledButtonProps) => {
  return (
    <StyledButton isDeleted={deleted} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
