import { useState } from "react";

const themes = ["light", "dark", "aqua", "forest"];

export const getBackground = (theme) => {
  const current =
    theme ??
    (typeof document !== "undefined"
      ? document.querySelector("[data-theme]")?.getAttribute("data-theme") ||
      document.documentElement.getAttribute("data-theme")
      : null) ??
    "light";

  return current === "light" ? "bg-base-300" : "bg-neutral";
};

export const useTheme = () => {
  const [index, setIndex] = useState(0);
  const theme = themes[index];
  const switchTheme = () => setIndex((i) => (i + 1) % themes.length);

  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", theme);
  }

  return { theme, switchTheme, background: getBackground(theme) };
};

export const useThemeReactive = getBackground;


