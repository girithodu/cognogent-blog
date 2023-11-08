import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { Divide } from "lucide-react";

export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {
  const title = posts.length === 1 ? `1 Post` : `${posts.length} Posts`;

  return (
    <div>
      <hr className=" border-primary" />
      <div>
        {/* Post */}
        {posts.map((post) => {
          return (
            <div
              key={post._id}
              className="flex flex-col group cursor-pointer mb-10 "
            >
              <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                <Image
                  src={urlForImage(post.mainImage).url()}
                  alt="logo"
                  fill
                />
                <div className=" absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between sm:flex flex-col ">
                  <p className="font-bold">{post.title}</p>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-y-2 md: gap-x-2 items-center">
                {post.categories &&
                  post.categories.map((category) => {
                    return (
                      <div className="bg-[#F7Ab0A] text-center rounded-full text-sm font-semibold px-3 text-black" key ={category.id}>
                        <p>{category.title}</p>
                      </div>
                    );
                  })}

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
