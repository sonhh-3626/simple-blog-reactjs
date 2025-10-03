import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <div className="blogLogo ">
        <h1 className={styles.title}>{title}</h1>
      </div>

      <nav>
        <ul className={styles.ul}>
          <li>
            <Link to="/" className={styles.navItem}>
              {t("home")}
            </Link>
          </li>
          <li>
            <Link to="/new-post" className={styles.navItem}>
              {t("create_new_post")}
            </Link>
          </li>
          <li>
            <Link to="about" className={styles.navItem}>
              {t("about")}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
