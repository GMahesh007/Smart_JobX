import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import RootLayout from "./RootLayout.jsx"; // Adjust the import path as necessary

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="326738687009-2fkg5bjke3870f23ag2nrnc35te7rmse.apps.googleusercontent.com">
      <RootLayout>
        <App />
      </RootLayout>
    </GoogleOAuthProvider>
  </StrictMode>
);
