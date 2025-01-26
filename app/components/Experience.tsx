import { ExperienceItems } from "@/lib/constants";
import { ArrowUpRightIcon } from "lucide-react";

const Experience = () => {
  return (
    <div id="Experience" className="flex flex-col gap-8 w-full">
      <h1 className="text-base ">Work Experience</h1>
      <div className="flex flex-col gap-10 w-full pl-4 lg:pl-0">
        {ExperienceItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-10 w-full"
          >
            <p className="min-w-[150px] text-sm text-gray-400 ">{item.date}</p>

            <div className="flex flex-col gap-1 ">
              <div className=" flex flex-row items-center gap-4 w-full ">
                <a
                  target="_blank"
                  href={item.url}
                  className="text-sm hover:underline underline-offset-4 hover:text-gray-500 "
                >
                  {item.title}
                  <ArrowUpRightIcon
                    className="w-3 h-3 ml-2 text-gray-400 inline-block "
                    strokeWidth={1}
                  />
                </a>
              </div>
              <p className="text-sm text-gray-500 tracking-wide ">
                {item.location}
              </p>

              <p className="text-sm text-gray-500 tracking-wide mt-2 ">
                {item.description}
              </p>
              {/* <ImageGallery imagesUrl={item.images} /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
