import S from "./Typography.module.scss";
import enLangTranslations from "../../assets/translations/en.json";
import { get } from "radash";
import clsx from "clsx";


export function Typography({
  textPath = "",
  replace = {},
  size = 14,
  weight = 400,
  className
}) {
  const text = useTextFromPath(textPath, replace);

  const textStyleParameters = {
    "--size": `${size}px`,
    "--weight": weight,
  };

  return (
    <span className={clsx(S.typography, className)} style={textStyleParameters}>
      {text}
    </span>
  );
}

export function useTextFromPath(path, replace = {}) {
  console.log(enLangTranslations);

  const textTemplate = get(enLangTranslations, path);

  const interpolatedText = replaceTemplatePlaceholders(textTemplate, replace);

  return interpolatedText;
}

function replaceTemplatePlaceholders(template, replacements) {
  const rrr = Object.entries(replacements).reduce(
    (template, [placeholder, value]) => {
      const interpolated = template.replace(`{{${placeholder}}}`, value);

      return interpolated;
    },
    template
  );

  return rrr;
}
