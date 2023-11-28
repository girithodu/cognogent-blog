import React from "react";
import Image from "next/image";
const BrandLogo = (props: any) => {
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-lg object-cover "
        src="/face.jpg"
        width={50}
        height={50}
        alt="Personal-Logo"
      />
      <>{props.renderDefault(props)}</>
    </div>
  );
};
export default BrandLogo;
