import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

import "./index.css";
import 'bulma/css/bulma.css';
import './styles.scss';


ReactDOM.render(
  <ChakraProvider  theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </React.StrictMode>
    </ChakraProvider>,
    document.getElementById("root")
  );

