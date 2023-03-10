import React from 'react';
import ReactDOM from 'react-dom/client';
import {store} from "./redux/store";
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
