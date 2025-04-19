import React, { useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import { blueTheme, materialDarkTheme } from "./theme";

function App() {
  const [theme, setTheme] = useState(blueTheme);
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === blueTheme ? materialDarkTheme : blueTheme
    );
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={chosenTheme} toggleTheme={toggleTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
