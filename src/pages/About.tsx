import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-gray-800 mt-4">{t("about_my_blog")}</h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        {t("welcome_to_my_blog")}
        <br/>
        {t("about_blog_description_part1")}
        <br/>
        {t("about_blog_description_part2")}
      </p>
    </div>
  );
}
