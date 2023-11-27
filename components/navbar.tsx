import React from "react";
import { Stack, Card, Flex, Text } from "@sanity/ui";
import { Undo2 } from "lucide-react";
import Link from "next/link";

const CustomNavbar = (props:any) => {
  return (
    <Stack className="flex justify-start bg-black ">
      <div className="flex p-2 ml-2">
        <div className="mr-2">
          <Undo2 size={20} color="#2fa0a0" strokeWidth={1.5} />
        </div>
        <Link href="/">Go to Website</Link>
      </div>
      <>{props.renderDefault(props)}</>
    </Stack>
  );
};

export default CustomNavbar;
