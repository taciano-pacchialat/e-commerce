import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightbrown: "#C4A605",
        darkbrown: "765827",
      },
    },
  },
  plugins: [],
  corePlugins: {
    transitionProperty: true,
    transitionTimingFunction: true,
    transitionDuration: true,
    transform: true,
    translate: true,
  },
};
export default config;
