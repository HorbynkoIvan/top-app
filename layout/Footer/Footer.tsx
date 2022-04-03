import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";
import {format} from "date-fns";

export const Footer = ({className, ...props }: FooterProps): JSX.Element => {
  return (
      <footer {...props} className={cn(className, styles.footer)}>
        <div className={styles.text3}>All rights protected - {format(new Date(), 'yyyy')}</div>
    <a href="#" target="_blank" className={styles.text2}>User agreement</a>
    <a href="#" target="_blank" className={styles.text2}>Privacy policy</a>
  </footer>
  );
};
