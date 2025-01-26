import { ProjectItems } from "@/lib/constants";
import { ArrowUpRightIcon } from "lucide-react";

const Projects = () => {
  return (
    <div id="Projects" className="flex flex-col gap-8 w-full">
      <h1 className="text-base ">Projects</h1>
      <div className="flex flex-col gap-10 w-full pl-4 lg:pl-0">
        {ProjectItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row justify-start items-start gap-2 lg:gap-10  w-full"
          >
            <p className="text-sm text-gray-400 min-w-[150px] ">{item.date}</p>
            <div className="flex flex-col gap-1 ">
              <div className=" flex flex-row items-center gap-4 w-full ">
                <a
                  target="_blank"
                  href={item.url}
                  className="text-sm hover:underline underline-offset-4 hover:text-gray-500 "
                >
                  {item.name}
                  <ArrowUpRightIcon
                    className="w-3 h-3 ml-2 text-gray-400 inline-block "
                    strokeWidth={1}
                  />
                </a>
              </div>
              <p className="text-sm text-gray-500 tracking-wide ">
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

export default Projects;

const ImageGallery = ({ imagesUrl }: { imagesUrl: string[] }) => {
  return (
    <div className=" flex flex-row gap-4 overflow-x-scroll  py-4 max-w-[400px]  scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 scrollbar-visible">
      {imagesUrl.map((url, index) => (
        <div
          key={index}
          className="flex-shrink-0 h-full flex flex-col justify-center items-center"
        >
          <img
            src={url}
            className="w-[100px] sm:w-[139px] rounded-sm sm:rounded-lg"
            alt="ProjectImage"
          />
        </div>
      ))}
    </div>
  );
};
