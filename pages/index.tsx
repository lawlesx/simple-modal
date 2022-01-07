import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Modal from "../Components/Modal";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="background">
      <Head>
        <title>Simple Modal</title>
        <meta name="description" content="Simple Modal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button className="button" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Home;
