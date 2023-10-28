import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-5 space-x-2 font-bold">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="/Cognogent_Stacked-with-Tagline-no-fill copy-No-Tag-v3-no-dots-sized copy.png"
            height={205}
            width={205}
            alt="Company Logo"
          />
        </Link>
      </div>
      <div >
        <Link className="px-5 py-3 text-sm md:text-base bg-gray-800 text-[#2fa0a0] flex items-center rounded-full" href="https://cognogent.com/rfxgpt">Checkout our latest AI product RFX AI</Link>
      </div>
    </header>
  );
};
export default Header;
