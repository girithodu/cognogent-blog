import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-5 space-x-2 font-bold">
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex gap-2 items-center">
          <Image
            className="object-contain rounded-lg"
            src="/face.jpg"
            height={55}
            width={55}
            alt="Company Logo"
          />
          <p className="text-2xl">Giri</p>
        </Link>
      </div>
      <div >
        <Link className="px-5 py-3 text-sm md:text-base bg-gray-800 text-[#2fa0a0] flex items-center rounded-full" href="http://github.com/girithodu">Checkout my latest projects</Link>
      </div>
    </header>
  );
};
export default Header;
