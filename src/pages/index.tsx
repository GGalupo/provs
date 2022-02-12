import Head from "next/head";
import type { NextPage } from "next";
import { Typography } from "@mui/material";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Provs</title>
        <meta name="description" content="Provs" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Typography>Provs</Typography>
    </div>
  );
};

export default Home;
