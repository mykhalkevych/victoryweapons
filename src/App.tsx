import React from "react";
import CssBaseline from "@mui/material/CssBaseline"; //like normalize.css
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <CssBaseline />

      <Button variant="contained">Привіт світ</Button>
    </div>
  );
}

export default App;
