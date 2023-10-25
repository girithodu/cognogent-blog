import React from "react";
import Image from "next/image";
const BrandLogo = (props) => {
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover "
        src="/Cognogent_Stacked-with-Tagline-no-fill copy-No-Tag-v3-no-dots-sized copy.png"
        width={200}
        height={200}
        alt="Cognogent-Logo"
      />
      <>{props.renderDefault(props)}</>
    </div>
  );
};
export default BrandLogo;
