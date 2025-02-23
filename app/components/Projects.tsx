import { ProjectItems } from "@/lib/constants";
import { Legend, LinkTag, Paragraph, SubHeading } from "./Typography";
import ImageGallery from "./ImageGallery";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="flex flex-col gap-8 w-full border-b-[1px] border-gray-200 border-dashed pb-10"
    >
      <SubHeading underline>Projects</SubHeading>
      <div className="flex flex-col gap-10 w-full pl-0">
        {ProjectItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-10  w-full"
          >
            <Legend>{item.date}</Legend>
            <div className="flex flex-col gap-1 ">
              <div className=" flex flex-row items-center gap-4 w-full ">
                <LinkTag href={item.url} external>
                  {item.name}
                </LinkTag>
              </div>
              <Paragraph>{item.description}</Paragraph>

              <ImageGallery imagesUrl={item.images} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
