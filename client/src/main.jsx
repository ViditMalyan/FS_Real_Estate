import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Auth0Provider} from "@auth0/auth0-react";
// import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <MantineProvider> */}
    <Auth0Provider
    domain="dev-dk8d3zuqwf8rwspg.us.auth0.com"
    clientId="N0I5ZZ81nsaq8ZeolfPsFIRqhRAo0Nlw"
    authorizationParams={{
      redirect_uri: "https://fs-real-estate-ruddy.vercel.app"
    }}
    audience="http://localhost:8000/"
    scope="openid profile email">
    <App />
    </Auth0Provider>
    {/* </MantineProvider> */}
  </React.StrictMode>
);