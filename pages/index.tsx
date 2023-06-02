import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { HeroImageRight } from "../components/Heroheader";
import styles from "../styles/Home.module.scss";
import HeaderMenu from "./../components/Header";
import { Features } from "./../components/Features";
import { FooterLinks } from "../components/Footerhero";
import New from "./new";


import {
  TickerSymbol,
  TickerTape,
  TickerTapeSymbol,
} from "react-ts-tradingview-widgets";

// const Home: NextPage = () => {
//   const symbols: TickerSymbol[] = [
//     {
//       title: "",
//       proName: "NASDAQ:AMZN",
//     },
//     {
//       title: "",
//       proName: "NASDAQ:NFLX",
//     },
//     {
//       title: "",
//       proName: "BSE:FEDERALBNK",
//     },
//     {
//       title: "",
//       proName: "BSE:BANKBARODA",
//     },
//     {
//       title: "",
//       proName: "BSE:NIFTYBEES",
//     },
//     {
//       title: "",
//       proName: "BSE:SBIN",
//     },
//     {
//       title: "",
//       proName: "BSE:GUJGAS",
//     },
//   ];
//   return (
//     <div>
//       <Head>
//         <title>Home | MegaCapital</title>
//       </Head>
//       <div style={{ zIndex: 100000, position: 'relative', background: 'black' }}><HeaderMenu /></div>
//       <div id="container">
//         <div id="image">
//           <HeroImageRight />
//         </div>
//         <div id="ticker">
//           <TickerTape symbols={symbols} colorTheme="dark"></TickerTape>
//         </div>

//         <div className="second_heroheader">
//           <p id="title">Start Earning <br></br>Safely and Easily Now...</p>
//           <span id='buttons'>
//             <Link href='/auth/login'>
//               <div id="signinb"><p id='signint'>Sign in</p></div>
//             </Link>
//             <Link href='/auth/signup'>
//               <div id="signupb"><p id='signupt'>Sign Up</p></div>
//             </Link>
//           </span>
//         </div>
//         <Features />
//         <FooterLinks />
//       </div>
//     </div >

//   );
// };

const Home: NextPage = () => {
  return (
    <>
      <Head>
//         <title>Home | BMoney</title>
//       </Head>
      <HeaderMenu />
      <New />
      <FooterLinks />
    </>)
}
export default Home;
