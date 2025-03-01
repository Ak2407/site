import BlogFooter from "../components/BlogFooter";
import { LinkTag } from "../components/Typography";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col gap-8 justify-between">
      <div className="bg-white border-b border-gray-200 ">
        <LinkTag href="/" className="hover:no-underline">
          Back to home
        </LinkTag>

        {children}
      </div>
      <div className="w-full flex items-center justify-center ">
        <BlogFooter />
      </div>
    </div>
  );
}
