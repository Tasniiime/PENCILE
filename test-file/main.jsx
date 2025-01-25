import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react"; 
import { BrowserRouter } from "react-router-dom";

const styles = {
  global: (props) => ({
    body: {
      color: mode('gray.800','witeAlpha.900')(props),
      bg: mode('gray.100','#101010')(props),
    }
  })
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};


const color = {
  gray: {
    light: '#616161',
    dark: '#1e1e1e',
  }
}


const theme = extendTheme({ config, style, color })

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme} >
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />  
        <App />
     </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
