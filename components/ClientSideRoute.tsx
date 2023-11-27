'use client'

import Link from 'next/link';
import React from 'react';

const ClientSideRoute = ({
  children, route
}: {
  children: React.ReactNode, 
  route: string
}) => {
  if(route){
    return (
      <Link href={route}>
        {children}
      </Link>
    )
  } else {
    return null;
  }
}
export default ClientSideRoute;