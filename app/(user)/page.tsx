import { SanityDocument } from "next-sanity";
import Posts from "../../components/Posts";
import { postsQuery } from "../../sanity/lib/queries";
import { sanityFetch, token } from "../../sanity/lib/sanityFetch";
import { draftMode } from "next/headers";
import PreviewPosts from "../../components/PreviewPosts";
import PreviewProvider from "../../components/PreviewProvider";

export default async function Home() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <PreviewProvider
        token={token}
        fallback={
          <div role="status">
            <p className="text-center, text-lg, animate-pulse, text-[#F7AB0A]">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <div>PREVIEW MODE</div>
        <PreviewPosts posts={posts} />
      </PreviewProvider>
    );
  }

  return <Posts posts={posts} />;
}
