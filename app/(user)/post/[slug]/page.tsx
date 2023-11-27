import React from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { RichTextComponent } from "../../../../components/RichTextComponents";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 30; // revalidate this page every 60 seconds

export async function generateStaticParams() {
  const query = groq `*[_type == "post"]{
    slug
  }`
  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map((slug:any) => slug.slug.current);

  return slugRoutes.map((slug:any)=> {
    slug
  })

}
const Post = async ({ params: { slug } }: Props) => {

  const query = groq`*[_type == 'post' && slug.current == $slug][0]{
    ...,
    author->,
    categories->
  }`;

  const post = await client.fetch(query, { slug });

  return (
    <article className="px-10 pb-28">
      <section className="space-y-2 border border-primary text-white mb-10">
        <div className="relative min-h-56 flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlForImage(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
          <section className="p-5 bg-primary w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5 md:items-center">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div className="flex items-center space-x-5">
                {post.author.image && (
                  <Image
                    className="rounded-full"
                    src={urlForImage(post.author.image).url()}
                    alt={post.author.name}
                    height={40}
                    width={40}
                  />
                )}

                <div className="w-64">
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                </div>
              </div>
            </div>
            <div>
              {post.description && (
                <h2 className="italic pt-10 ">{post.description}</h2>
              )}
              {post.categories && (
                <div className="flex items-center justify-end mt-auto space-x-2">
                  {post.categories.map((category:any) => {
                    <p key={category.id} className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4">{category.title}</p>;
                  })}
                </div>
              )}
            </div>
          </section>
        </div>
      </section>
      <PortableText value={post.body} components={RichTextComponent} />
    </article>
  );
};

export default Post;
