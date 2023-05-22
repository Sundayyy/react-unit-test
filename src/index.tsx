import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";

import ErrorBoundary from "@components/ErrorBoundaryState";
import AppProvider from "@contexts/AppProvider";
import i18n from "@locales/i18n";
import { store } from "@apps/store";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

import "react-toastify/dist/ReactToastify.css";
import "bulma/css/bulma.min.css";
import "@styles/main.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <AppProvider>
            <ErrorBoundary>
              <App />
            </ErrorBoundary>
          </AppProvider>
        </I18nextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
