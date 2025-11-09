import { useState, React } from "react";
import Moon from "./assets/assets/logo_dark_mode.svg";
import Sun from "./assets/assets/logo_light_mode.svg";
import AppLogo from "./assets/assets/app_logo.png";
import LetterCounter from "./assets/component/LetterCounter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const ToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const darkClasses = "bg-black text-white h-screen";
  const lightClasses = "bg-white text-black h-screen";

  return (
    <div className={isDarkMode ? darkClasses : lightClasses}>
      <div className="min-h-full flex flex-col">
        <div
          className="container mx-auto px-4 flex-grow"
          style={{
            backgroundColor: isDarkMode ? "#222222" : "#ffffff",
            color: isDarkMode ? "#ffffff" : "#222222",
            width: "100%",
          }}
        >
          <div className="flex justify-between items-center py-6 rounded-lg px-6 shadow-lg">
            <img
              src={AppLogo}
              alt="Logo"
              width="120"
              className={isDarkMode ? "invert brightness-100" : ""}
            />
            <img
              src={isDarkMode ? Moon : Sun}
              alt="Toggle Dark/Light"
              width="40"
              onClick={ToggleDarkMode}
              className="cursor-pointer"
            />
          </div>
          <LetterCounter isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}

export default App;
