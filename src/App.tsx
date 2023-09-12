import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"; //like normalize.css
import "./App.css";
import HeaderComponent from "./components/header/HeaderComponent";
import FooterComponent from "./components/footer/FooterComponent";
import { Container } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <HeaderComponent />
        <Container style={{ flexGrow: 1 }}>
          {/* Your main application content here */}
          {/* This Container will grow to fill available space */}
        </Container>
        <FooterComponent />
      </ThemeProvider>

      <Outlet />
    </div>
  );
}

export default App;
