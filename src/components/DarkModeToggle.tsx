// src/components/DarkModeToggle.tsx

import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const DarkModeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <label>
      <input
        type="checkbox"
        checked={darkMode}
        onChange={() => toggleDarkMode()}
      />
      Dark Mode
    </label>
  );
};

export default DarkModeToggle;
