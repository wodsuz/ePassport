import "../styles/globals.css";
import { StatusProvider } from "../context/statusContext";

function MyApp({ Component, pageProps }: any) {
  return (
    <StatusProvider>
      <Component {...pageProps} />
    </StatusProvider>
  );
}

export default MyApp;
