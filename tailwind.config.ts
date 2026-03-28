import type { Config } from "tailwindcss";

const config: Config = {
  // Make sure to include the paths to all your components/pages here!
  // Example for Next.js or React/Vite:
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface": "#131313",
        "on-error": "#690005",
        "on-primary-fixed-variant": "#7a3000",
        "surface-container-lowest": "#0e0e0e",
        "surface-dim": "#131313",
        "secondary": "#c6c6c7",
        "on-primary-container": "#582100",
        "surface-container-highest": "#353535",
        "on-tertiary-fixed": "#1a1c1c",
        "surface-bright": "#393939",
        "background": "#131313",
        "surface-container-low": "#1b1b1b",
        "primary": "#ffb692",
        "on-tertiary-fixed-variant": "#464747",
        "on-secondary": "#2f3131",
        "inverse-on-surface": "#303030",
        "inverse-surface": "#e2e2e2",
        "primary-container": "#ff6d00",
        "inverse-primary": "#9f4200",
        "on-error-container": "#ffdad6",
        "on-primary": "#562000",
        "secondary-fixed-dim": "#c6c6c7",
        "outline": "#a98a7c",
        "on-surface-variant": "#e2bfb0",
        "on-tertiary-container": "#313232",
        "on-primary-fixed": "#341100",
        "on-secondary-fixed": "#1a1c1c",
        "on-surface": "#e2e2e2",
        "error": "#ffb4ab",
        "primary-fixed": "#ffdbcb",
        "secondary-container": "#454747",
        "primary-fixed-dim": "#ffb692",
        "on-secondary-container": "#b4b5b5",
        "on-background": "#e2e2e2",
        "on-tertiary": "#2f3131",
        "surface-container": "#1f1f1f",
        "outline-variant": "#594136",
        "on-secondary-fixed-variant": "#454747",
        "tertiary": "#c7c6c6",
        "surface-container-high": "#2a2a2a",
        "tertiary-container": "#9a9a9a",
        "secondary-fixed": "#e2e2e2",
        "surface-variant": "#353535",
        "surface-tint": "#ffb692",
        "tertiary-fixed-dim": "#c7c6c6",
        "error-container": "#93000a",
        "tertiary-fixed": "#e3e2e2",
      },
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"], // Added fallback font
        body: ["Space Grotesk", "sans-serif"],
        label: ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0px",
        lg: "0px",
        xl: "0px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;