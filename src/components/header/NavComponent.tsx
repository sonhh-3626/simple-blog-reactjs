import { useTranslation } from "react-i18next";

export default function NavComponent() {
  const { t } = useTranslation();

  return (
    <>
      <nav>
        <ul className="flex gap-4 list-none m-0 p-0">
          <li>
            <a
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              {t("home")}
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              {t("about")}
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
