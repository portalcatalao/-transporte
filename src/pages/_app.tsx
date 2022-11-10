import { AppProps } from "next/app";
import Header from "../components/Header";

import "../../styles/global.scss";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { AuthProvider } from "../contexts/AuthContext";
import { HeaderAdmin } from "../components/HeaderAdmin";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AuthProvider>
      {router.asPath != "/login" && !router.asPath.startsWith("/admin") && <Header />}
      {router.asPath != "/login" && router.asPath.startsWith("/admin") && <HeaderAdmin />}
      <Component {...pageProps} />
      {router.asPath != "/login" && !router.asPath.startsWith("/admin") && <Footer />}

    </AuthProvider>
  );
}

export default MyApp;
