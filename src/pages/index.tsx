import Head from "next/head";
import Banner from "../components/Banner";
import Company from "../components/Company";
import Flag from "../components/Flag";
import Fleet from "../components/Fleet";
import Guide from "../components/Guide";
import Place from "../components/Place";
import Servicing from "../components/Servicing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Grupo Transduarte</title>
      </Head>

      <main>
        <Banner />
        <Company />
        <Servicing />
        <Flag />
        {/* <Fleet /> */}
        <Guide />
        <Place />
      </main>
    </>
  );
}
