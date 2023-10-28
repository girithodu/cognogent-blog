import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-5 space-x-2 font-bold">
      <div className="flex items-center space-x-2">
        <Link href='/'>
          <Image
            src="/cognogent.png"
            height={45}
            width={45}
            alt="Company Logo"
          />
        </Link>
        <h1>Cognogent</h1>
      </div>
      <div></div>
    </header>
  );
};
export default Header;