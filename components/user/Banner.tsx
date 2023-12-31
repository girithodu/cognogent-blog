import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-5 justify-between font-bold px-10 mb-10 ">
      <div>
      <h1 className="text-7xl">Giri&apos;s Daily Blog</h1>
        <h2 className="mt-5 md:mt-2">
          Welcome to{" "}
          <span className=" underline decoration-[#2fa0a0] decoration-4">
            Every Developers
          </span>{" "}
          favorite blog in the Devosphere
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New project updates | The latest in AI technology | The weekly updates
        on Technology & More!
      </p>
    </div>
  );
};
export default Banner;
