import classNames from "classnames";
import { Link as ReactLink, LinkProps } from "react-router-dom";
import styles from "./Link.module.scss";

const Link = ({ children, onClick, className, ...props }: LinkProps) => {
  return (
    <ReactLink
      onClick={onClick}
      className={classNames(styles.link, className)}
      {...props}
    >
      {children}
    </ReactLink>
  );
};

export default Link;
