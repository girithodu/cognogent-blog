import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import ClientSideRoute from "./ClientSideRoute";

export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {
  return (
    <div>
      <hr className=" border-primary mb-10" />
      <div className=" grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16">
        {/* Post */}
        {posts.map((post) => {
          console.log('Post Slug: ', post.slug);
          return (
            <ClientSideRoute
              key={post._id}
              route={`/post/${post.slug.current}`}
            >
              <div className="flex flex-col group cursor-pointer mb-10 ">
                <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                  <Image
                    className=" object-cover object center"
                    src={urlForImage(post.mainImage).url()}
                    alt={post.author.name}
                    loading="lazy"
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
                      post.categories.map((category:any) => {
                        return (
                          <div
                            className="bg-[#F7Ab0A] text-center rounded-full text-sm font-semibold px-3 text-black"
                            key={category.id}
                          >
                            <p>{category.title}</p>
                          </div>
                        );
                      })}
                  </div>
                </div>

                <div className="mt-5 flex-1">
                  <p className="underline font-bold text-lg ">{post.title}</p>
                  {post.description && (
                    <p className="text-gray-500 line-clamp-2">
                      {post.description}
                    </p>
                  )}

                  <p className=" text-gray-500 line-clamp-2">
                    Explore a world of captivating articles and insightful
                    stories at [Your Blog Name]. From the latest trends in
                    technology to inspiring travel adventures, we cover a wide
                    range of topics to keep you informed and entertained. Dive
                    into a collection of well-crafted content, written by our
                    team of passionate writers. Whether youre a tech
                    enthusiast, a travel buff, or simply love a good story,
                    [Your Blog Name] has something for everyone. Join us on a
                    journey of discovery and stay tuned for regular updates that
                    will enrich your reading experience.
                  </p>
                </div>

                <p className="mt-5 font-bold flex items-center group-hover:underline">
                  Read post
                  <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                </p>
              </div>
            </ClientSideRoute>
          );
        })}
      </div>
    </div>
  );
}
