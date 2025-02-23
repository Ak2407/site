import { ExperienceItems } from "@/lib/constants";
import { Legend, LinkTag, Paragraph, SubHeading } from "./Typography";

const Experience = () => {
  return (
    <div
      id="Experience"
      className="flex flex-col gap-8 w-full border-b-[1px] border-gray-200 border-dashed pb-10"
    >
      <SubHeading underline>Work Experience</SubHeading>
      <div className="flex flex-col gap-10 w-full pl-0">
        {ExperienceItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-10 w-full"
          >
            <Legend>{item.date}</Legend>

            <div className="flex flex-col gap-1 ">
              <div className=" flex flex-row items-center gap-4 w-full ">
                <LinkTag href={item.url} external>
                  {item.title}
                </LinkTag>
              </div>
              <p className="text-sm text-gray-500 tracking-wide ">
                {item.location}
              </p>

              <Paragraph className="mt-2 ">{item.description}</Paragraph>
              {/* <ImageGallery imagesUrl={item.images} /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
