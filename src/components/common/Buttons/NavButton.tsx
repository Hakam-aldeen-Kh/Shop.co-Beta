import { NavLink } from "react-router-dom";

type NavButtonProps = {
  to: string;
  className: string;
  children: React.ReactNode;
};

const NavButton = ({ to, className, children }: NavButtonProps) => {
  return (
    <NavLink to={to} className={className}>
      {children}
    </NavLink>
  );
};

export default NavButton;
