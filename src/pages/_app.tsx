import { AppProps } from "next/app";
import Header from "../components/Header";

import "../../styles/global.scss";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { AuthProvider } from "../contexts/AuthContext";
import { HeaderAdmin } from "../components/HeaderAdmin";
import Image from "next/image";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AuthProvider>
      <Head>
        <link rel="stylesheet" href="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-button.css" />
      </Head>

      {router.asPath != "/login" && !router.asPath.startsWith("/admin") && <Header />}
      {router.asPath != "/login" && router.asPath.startsWith("/admin") && <HeaderAdmin />}
      <Component {...pageProps} />
      {router.asPath != "/login" && !router.asPath.startsWith("/admin") && <Footer />}

      <a id="robbu-whatsapp-button" target="_blank" href="https://api.whatsapp.com/send?phone=5564984411100&text=Ol%C3%A1,%20gostaria%20de%20atendimento.">
        <div className="rwb-tooltip">Enviar</div>
        <Image src="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-icon.svg" layout="fill" />
      </a>
    </AuthProvider>
  );
}

export default MyApp;
