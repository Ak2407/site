import { LinkTag } from "../components/Typography";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <LinkTag href="/">Back to home</LinkTag>

      {children}
    </div>
  );
}
