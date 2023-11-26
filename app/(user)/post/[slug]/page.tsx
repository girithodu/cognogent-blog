import React from "react";
type Props = {
  params: {
    slug: string;
  };
};
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";


const Post = async ({ params: { slug } }: Props) => {
  const query = groq`*[_type == 'post' && slug.current == $slug][0]{
    ...,
    author->,
    categories->
  }`;
  const post = await client.fetch(query, { slug });
  console.log('Post  ', post);

  return <div>Post : {slug}</div>;
};

export default Post;
