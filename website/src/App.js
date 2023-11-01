import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Detail from "./scenes/detail/Detail";
import Bookview from "./scenes/bookview/Bookview";
import Home from "./scenes/dashboard/home";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/book/:id/:count" element={<Dashboard />} />
              {/* <Route path="/form" element={<Form />} /> */}
            </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
