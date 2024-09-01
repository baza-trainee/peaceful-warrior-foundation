// import { Montserrat } from "next/font/google";

// export const montserrat = Montserrat({
//   weight: ["300", "400", "500"],
//   subsets: ["latin", "cyrillic"],
//   display: "swap",
// });

import { Montserrat, Open_Sans, Lora } from "next/font/google";

export const montserrat = Montserrat({
  weight: ["300", "400", "500"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const openSans = Open_Sans({
  weight: ["400"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const lora = Lora({
  weight: ["400"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});
