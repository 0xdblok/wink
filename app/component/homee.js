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
import "../globals.css";

export default function Homee() {
  return (
    <div className="bg-custom-bg pb-8 font-serif font-bold">
      <div className="flex justify-center pt-8 ">
        <nav className="flex bg-[#A6B5FF] gap-14 px-10 py-3 rounded-xl text-white font-semibold">
          <a>Buy</a>
          <a>Links</a>
          <a>Chart</a>
          <a>Memes</a>
        </nav>
      </div>
      <div className="flex justify-center pt-8">
        <div className=" border-4 border-white">
          <Image
            className="width-[350px] height-[350px]"
            src={hero}
            alt="home"
            width={250}
            height={250}
          />
        </div>
      </div>
      <div>
        <p className="text-center text-white font-semibold pt-8 px-20 lg:px-[300px]">
          $WINK IS THE CUTEST CAT ON SOLANA, ON A MISSION TO BE WORTH MORE AND
          MORE!
        </p>
      </div>
      <div className="flex justify-center pt-8">
        {" "}
        <a
          href="https://pump.fun/DD84KPcKimKiLRpfZjGiYracHbWQoTRQAne3CAKkpump"
          className="text-center px-6 py-3 text-white font-semibold bg-[#A6B5FF] rounded-lg  ">
          BUY SOME $WINK
        </a>
      </div>
      <div className="flex justify-center pt-8">
        <p className="text-center text-white font-semibold">
          https://pump.fun/DD84KPcKimKiLRpfZjGiYracHbWQoTRQAne3CAKkpump
        </p>
      </div>
      <div className="flex justify-center pt-8">
        <div className="grid grid-cols-4 gap-4 ">
          <a href="https://x.com/winkcoinsol">
            <Image
              className="rounded-xl"
              src={xx}
              alt="home"
              width={50}
              height={50}
            />
          </a>
          <a href="https://t.me/winkcoinchat">
            <Image
              className="rounded-xl"
              src={telegram}
              alt="home"
              width={50}
              height={50}
            />
          </a>
          <a href="">
            <Image
              className="rounded-xl"
              src={dexscreener}
              alt="home"
              width={50}
              height={50}
            />
          </a>
          <a href="">
            <Image
              className="rounded-xl"
              src={birdeye}
              alt="home"
              width={50}
              height={50}
            />
          </a>
          <a href="">
            <Image
              className="rounded-xl"
              src={gecko}
              alt="home"
              width={50}
              height={50}
            />
          </a>
          <a href="">
            <Image
              className="rounded-xl"
              src={dextools}
              alt="home"
              width={50}
              height={50}
            />
          </a>
          <a href="">
            <Image
              className="rounded-xl"
              src={marketcap}
              alt="home"
              width={50}
              height={50}
            />
          </a>
        </div>
      </div>
      <div className="flex justify-center pt-8">
        <p className="text-center text-white font-semibold">
          CHECK OUT THE WINK MEMES!
        </p>
      </div>
      <div className="flex justify-center pt-8">
        <div className=" border-4 border-white ">
          <Image src={hero} alt="home" width={250} height={250} />
        </div>
      </div>
      <div className="flex justify-center pt-8">
        {" "}
        <a
          href="https://pump.fun/DD84KPcKimKiLRpfZjGiYracHbWQoTRQAne3CAKkpump"
          className="text-center px-6 py-3 text-white font-semibold bg-[#A6B5FF] rounded-lg  ">
          WINK MEMES
        </a>
      </div>
    </div>
  );
}
