import Head from "next/head";
import type { NextPage } from "next";

import { Link } from "../components/Link";
import { Typography } from "../components/MUI";
import { GlobalContainer } from "../styles";

const Home: NextPage = () => {
  return (
    <GlobalContainer>
      <Head>
        <title>Provs</title>
        <meta name="description" content="Provs" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Typography variant="h1">Home page</Typography>
      <Link href="/login">To login page</Link>
      <Link href="/sign-up">To sign-up page</Link>
    </GlobalContainer>
  );
};

export default Home;
