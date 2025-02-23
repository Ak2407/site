import { LinkTag, Paragraph, SubHeading } from "./Typography";

const AboutSection = () => {
  return (
    <div className="space-y-2 border-b-[1px] border-gray-200 border-dashed pb-10">
      <SubHeading underline>About</SubHeading>
      <Paragraph>
        I'm a 22 years old developer based in India. I have been writing code
        for 4 years now. Love building slick and optimized apps. Full-stack
        gang, but frontend is where my heart vibes the most. Here is my{" "}
        <LinkTag underline href="/blogs/stack">
          tech stack
        </LinkTag>
      </Paragraph>
    </div>
  );
};

export default AboutSection;
