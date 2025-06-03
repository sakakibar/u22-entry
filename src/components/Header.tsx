import styles from "./Header.module.css";
import {Nav} from "./Nav";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">音ログ</Link>
      </h1>
      <Nav />
    </header>
  );
};
