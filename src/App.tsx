import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"; //like normalize.css
import "./App.css";
import HeaderComponent from "./components/header/HeaderComponent";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <HeaderComponent />
      </ThemeProvider>

      <Outlet />
    </div>
  );
}

export default App;
