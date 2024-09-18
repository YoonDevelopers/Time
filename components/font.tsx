// components/fonts.tsx
import {
  Roboto_Slab,
  Open_Sans,
  Lora,
  Montserrat,
  Poppins,
  Noto_Sans,
  Merriweather,
  Raleway,
  Inter,
  Playfair_Display,
  Lato,
  Oswald,
  Ubuntu,
  Cabin,
  Fira_Sans,
  Exo_2,
  Rubik,
  Nunito,
  PT_Serif,
  Josefin_Sans,
  Abril_Fatface,
  Dancing_Script,
  Pacifico,
  Amatic_SC,
  Quicksand,
  Baloo_2,
  Balsamiq_Sans,
  Anton,
  Zilla_Slab,
  Manrope,
} from "next/font/google";

// 각 폰트 로더를 모듈 스코프에서 const로 선언
export const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: ["400", "700"] });
export const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });
export const lora = Lora({ subsets: ["latin"], weight: ["400", "700"] });
export const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
export const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
export const notoSans = Noto_Sans({ subsets: ["latin"], weight: ["400", "700"] });
export const merriweather = Merriweather({ subsets: ["latin"], weight: ["400", "700"] });
export const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"] });
export const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
export const playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
export const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
export const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"] });
export const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "700"] });
export const cabin = Cabin({ subsets: ["latin"], weight: ["400", "700"] });
export const firaSans = Fira_Sans({ subsets: ["latin"], weight: ["400", "700"] });
export const exo2 = Exo_2({ subsets: ["latin"], weight: ["400", "700"] });
export const rubik = Rubik({ subsets: ["latin"], weight: ["400", "700"] });
export const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700"] });
export const ptSerif = PT_Serif({ subsets: ["latin"], weight: ["400", "700"] });
export const josefinSans = Josefin_Sans({ subsets: ["latin"], weight: ["400", "700"] });
export const abrilFatface = Abril_Fatface({ subsets: ["latin"], weight: ["400"] });
export const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });
export const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
export const amaticSC = Amatic_SC({ subsets: ["latin"], weight: ["400", "700"] });
export const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "700"] });
export const baloo2 = Baloo_2({ subsets: ["latin"], weight: ["400", "700"] });
export const balsamiqSans = Balsamiq_Sans({ subsets: ["latin"], weight: ["400", "700"] });
export const anton = Anton({ subsets: ["latin"], weight: ["400"] });
export const zillaSlab = Zilla_Slab({ subsets: ["latin"], weight: ["400", "700"] });
export const manrope = Manrope({ subsets: ["latin"], weight: ["400", "700"] });

// 배열로 export
export const fonts = [
  { key: "roboto", name: "Roboto Slab", font: robotoSlab },
  { key: "openSans", name: "Open Sans", font: openSans },
  { key: "lora", name: "Lora", font: lora },
  { key: "montserrat", name: "Montserrat", font: montserrat },
  { key: "poppins", name: "Poppins", font: poppins },
  { key: "notoSans", name: "Noto Sans", font: notoSans },
  { key: "merriweather", name: "Merriweather", font: merriweather },
  { key: "raleway", name: "Raleway", font: raleway },
  { key: "inter", name: "Inter", font: inter },
  { key: "playfairDisplay", name: "Playfair Display", font: playfairDisplay },
  { key: "lato", name: "Lato", font: lato },
  { key: "oswald", name: "Oswald", font: oswald },
  { key: "ubuntu", name: "Ubuntu", font: ubuntu },
  { key: "cabin", name: "Cabin", font: cabin },
  { key: "firaSans", name: "Fira Sans", font: firaSans },
  { key: "exo2", name: "Exo 2", font: exo2 },
  { key: "rubik", name: "Rubik", font: rubik },
  { key: "nunito", name: "Nunito", font: nunito },
  { key: "ptSerif", name: "PT Serif", font: ptSerif },
  { key: "josefinSans", name: "Josefin Sans", font: josefinSans },
  { key: "abrilFatface", name: "Abril Fatface", font: abrilFatface },
  { key: "dancingScript", name: "Dancing Script", font: dancingScript },
  { key: "pacifico", name: "Pacifico", font: pacifico },
  { key: "amaticSC", name: "Amatic SC", font: amaticSC },
  { key: "quicksand", name: "Quicksand", font: quicksand },
  { key: "baloo2", name: "Baloo 2", font: baloo2 },
  { key: "balsamiqSans", name: "Balsamiq Sans", font: balsamiqSans },
  { key: "anton", name: "Anton", font: anton },
  { key: "zillaSlab", name: "Zilla Slab", font: zillaSlab },
  { key: "manrope", name: "Manrope", font: manrope },
];
