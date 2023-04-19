import { UnocssNuxtOptions } from "@unocss/nuxt";
import { transformerCompileClass } from "unocss";

export const unocss: UnocssNuxtOptions = {
  preflight: false,
  icons: true,
  preflights: [
    {
      getCSS: () => `
        html{font-family:"Inter",sans-serif}
      `,
    },
  ],
  webFonts: {
    fonts: {
      sans: [
        { name: "Inter", weights: [400, 600] },
        { name: "sans-serif", provider: "none" },
      ],
    },
  },
  theme: {
    darkMode: "class",
    breakpoints: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    colors: {
      neutral: {
        DEFAULT: "#eaeaea",
        "1": "#fafafa",
        "2": "#f5f5f5",
        "3": "#eaeaea",
        "4": "#d4d4d4",
        "5": "#adadad",
        "6": "#808080",
        "7": "#646464",
        "8": "#484848",
        "9": "#333333",
      },
      primary: {
        DEFAULT: "#ff6800",
        "1": "#ffc9a3",
        "2": "#ff9852",
        "3": "#ff6800",
        "4": "#c24f00",
        "5": "#853600",
      },
      blue: {
        DEFAULT: "#2256ff",
        "1": "#eef2ff",
        "2": "#c5d3ff",
        "3": "#2256ff",
        "4": "#0736b4",
        "5": "#0d3899",
      },
      teal: {
        DEFAULT: "#3ac5de",
        "1": "#9747FF",
        "2": "#bff3fc",
        "3": "#3ac5de",
        "4": "#218491",
        "5": "#23737a",
      },
      green: {
        DEFAULT: "#2ce23c",
        "1": "#dbffde",
        "2": "#b4fdba",
        "3": "#2ce23c",
        "4": "#1b8d21",
        "5": "#1e7620",
      },
      yellow: {
        DEFAULT: "#ffc60d",
        "1": "#fff6d9",
        "2": "#ffecb0",
        "3": "#ffc60d",
        "4": "#9f7607",
        "5": "#86610c",
      },
      orange: {
        DEFAULT: "#ff8419",
        "1": "#fff1e5",
        "2": "#ffdbbc",
        "3": "#ff8419",
        "4": "#ab4e07",
        "5": "#91410d",
      },
      red: {
        DEFAULT: "#ff1919",
        "1": "#ffe5e5",
        "2": "#ffbcbc",
        "3": "#ff1919",
        "4": "#ab070d",
        "5": "#910d15",
      },
    },
    boxShadow: {
      lv1: "0px 4px 12px rgba(0, 0, 0, 0.04)",
      lv2: "1px 4px 16px rgba(0, 0, 0, 0.08)",
      lv3: "2px 4px 16px rgba(0, 0, 0, 0.12)",
    },
    borderRadius: {
      "0": "0",
      max: "87rem",
      xs: "0.25rem",
      sm: "0.5rem",
      md: "0.75rem",
      lg: "1rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.75rem",
    },
    fontSize: {
      xs: "10px",
      sm: "12px",
      base: "14px",
      lg: "16px",
      "2xl": "18px",
      "3xl": "20px",
      h4: "24px",
      h3: "28px",
      h2: "32px",
    },
  },
  shortcuts: [
    [
      /^b-(!?)(c|bg|border)-(.*)/,
      ([, i, s, v]) => `${i}${s}-[var(--b-color-${v})]`,
    ],
    [
      /^b-sd-(.*)/,
      ([, v]) => `shadow-${v} shadow-[var(--b-color-shadow-${v})]`,
    ],
  ],
  variants: [],
  safelist: [],
  transformers: [transformerCompileClass()],
};
