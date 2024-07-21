import React from "react";
import Image from "next/image";
import xx from "../asset/xx.jpg";
import telegram from "../asset/telegram.jpg";
import marketcap from "../asset/marketcap.jpg";
import gecko from "../asset/gecko.jpg";
import dextools from "../asset/dextools.jpg";
import dexscreener from "../asset/dexscreener.jpg";
import birdeye from "../asset/birdeye.jpg";
import hero from "../asset/hero.jpg";
export default function Homee() {
  return (
    <div className="bg-custom-bg ">
      <div className="flex justify-center pt-8 ">
        <nav className="flex bg-[#A6B5FF] gap-8 px-8 py-2 rounded-xl text-white font-semibold">
          <a>Buy</a>
          <a>Links</a>
          <a>Chart</a>
          <a>Memes</a>
        </nav>
      </div>
      <div className="flex justify-center pt-8">
        <div className=" border-4 border-white rounded-xl">
          <Image src={hero} alt="home" width={300} height={300} />
        </div>
      </div>
      <div>
        <p className="text-center text-white font-semibold pt-8">
          $WINK IS THE CUTEST CAT ON SOLANA, ON A MISSION TO BE WORTH TRILLYONS
          AND TRILLYONS!
        </p>
      </div>
      <div className="flex justify-center pt-8">
        {" "}
        <a className="text-center px-6 py-3 text-white font-semibold bg-[#A6B5FF] rounded-lg  ">
          BUY SOME $WICK
        </a>
      </div>
      <div className="flex justify-center pt-8">
        <p className="text-center text-white font-semibold">CONTRACT TBA</p>
      </div>
      <div className="flex justify-center pt-8">
        <div className="grid grid-cols-4 gap-4 ">
          <Image src={xx} alt="home" width={50} height={50} />
          <Image src={telegram} alt="home" width={50} height={50} />
          <Image src={dexscreener} alt="home" width={50} height={50} />
          <Image src={birdeye} alt="home" width={50} height={50} />
          <Image src={gecko} alt="home" width={50} height={50} />
          <Image src={dextools} alt="home" width={50} height={50} />
          <Image src={marketcap} alt="home" width={50} height={50} />
        </div>
      </div>
      <div className="flex justify-center pt-8">
        <p className="text-center text-white font-semibold">
          CHECK OUT THE WINK MEMES!
        </p>
      </div>
      <div className="flex justify-center pt-8">
        <div className=" border-4 border-white rounded-xl">
          <Image src={hero} alt="home" width={300} height={300} />
        </div>
      </div>
      <div className="flex justify-center pt-8">
        {" "}
        <a className="text-center px-6 py-3 text-white font-semibold bg-[#A6B5FF] rounded-lg  ">
          TRILLY MEMES
        </a>
      </div>
    </div>
  );
}
