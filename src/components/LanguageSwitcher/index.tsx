import { useTranslation } from "react-i18next";
import br from "./assets/br.svg";
import us from "./assets/us.svg";
import { Button, LanguageSwitcherContainer } from "./style";

const languageOptions = [
  {
    name: "Português",
    value: "ptBR",
    flag: br
  },
  {
    name: "English",
    value: "en",
    flag: us
  }
]

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <LanguageSwitcherContainer>
      {languageOptions.map((languageOption) => (
        <Button
          key={languageOption.value}
          onClick={() => {
            i18n.changeLanguage(languageOption.value);
          }}
        >
          <img style={{ width: 40, height: 60, borderRadius: "50%" }} src={languageOption.flag} alt={languageOption.name} />
        </Button>
      ))}
    </LanguageSwitcherContainer>
  );
}