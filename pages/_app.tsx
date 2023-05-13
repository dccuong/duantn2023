import "../styles/globals.css";
import React, { useEffect } from "react";
import { AppPropsWithLayout } from "../models/layout";
import { Provider } from "react-redux";
import persistor, { store } from "../redux/store";
import "antd/dist/antd.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "react-quill/dist/quill.snow.css";
import { SessionProvider } from "next-auth/react";
import "sweetalert2/src/sweetalert2.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { ClientLayout } from "../layouts";

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <ClientLayout>{page}</ClientLayout>);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SessionProvider session={pageProps.session}>
          {getLayout(
            <>
              <Component {...pageProps} />
              <ToastContainer />
            </>
          )}
        </SessionProvider>
      </PersistGate>
    </Provider>
  );
}
