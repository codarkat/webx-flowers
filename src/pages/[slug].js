import Typed from "typed.js";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Women's", "Sweetest"],
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 1500,
      loop: !0,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <Head>
        <title>HAPPY WOMEN&apos;S DAY</title>
        <meta name="description" content="Coming soon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
      </Head>
      <main>
        <div className="container-fluid area h-100">
          <ul className="circles">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
          <div className="container padding-top-bottom h-100 d-flex flex-column text-center justify-content-between align-content-center align-self-center">
            <div className="cs-logo">
              <a href="#">
                <Image
                  src="images/logo.svg"
                  alt="logo"
                  width={200}
                  height={30}
                />
              </a>
            </div>
            <div className="cs-content">
              <h2 className="ff-great gradient-slide-in-text">
                Happy&nbsp;
                {/* <span
                  className="typer"
                  id="main"
                  // data-words=["Women's","Sweetest"]
                  data-delay={100}
                  data-deletedelay={1000}
                /> */}
                <span ref={el}></span>
                &nbsp;Day
              </h2>
              <p>
                The gift will be opened on
                <span className="fw-bold">&nbsp;March 8th</span>
              </p>
            </div>
            <div className="cs-countdown d-flex justify-content-center">
              <ul
                className="ot-countdown countdown unstyle"
                data-date="2023-03-08T00:00:00"
              >
                <li>
                  <span className="days">00</span>
                  <p className="days_text">Days</p>
                </li>
                <li className="seperator">:</li>
                <li>
                  <span className="hours">00</span>
                  <p className="hours_text">Hours</p>
                </li>
                <li className="seperator">:</li>
                <li>
                  <span className="minutes">00</span>
                  <p className="minutes_text">Minutes</p>
                </li>
                <li className="seperator">:</li>
                <li>
                  <span className="seconds">00</span>
                  <p className="seconds_text">Second</p>
                </li>
              </ul>
            </div>
            <div className="cs-link">
              <p className="text-white-50">flowers.mireavn.com</p>
            </div>
          </div>
        </div>
        <Script src="coming-soon.js"></Script>
        <Script
          async
          src="https://unpkg.com/typer-dot-js@0.1.0/typer.js"
        ></Script>
      </main>
    </>
  );
}
