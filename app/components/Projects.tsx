import { ProjectItems } from "@/lib/constants";
import Image from "next/image";

const Projects = () => {
  return (
    <div id="Projects" className="flex flex-col gap-8 w-full">
      <h1 className="text-base ">Projects</h1>
      <div className="flex flex-col gap-10 w-full">
        {ProjectItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-row justify-start items-start gap-20 w-full"
          >
            <p className="text-xs text-gray-400 ">{item.date}</p>
            <div className="flex flex-col gap-1 ">
              <div className=" flex flex-row items-center gap-4 w-full ">
                <p className="text-sm">{item.name}</p>

                <a
                  className="text-blue-500 underline underline-offset-2 hover:text-blue-400 duration-200 text-xs"
                  href={item.url}
                >
                  live-url
                </a>
                <a
                  className="text-blue-500 underline underline-offset-2 hover:text-blue-400 duration-200 text-xs"
                  href={item.github}
                >
                  code
                </a>
              </div>
              <p className="text-sm text-gray-500 ">{item.description}</p>
              <ImageGallery imagesUrl={item.images} />
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
    <div className="w-full flex flex-row gap-4 overflow-x-scroll  py-4 max-w-[400px] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 scrollbar-visible">
      {imagesUrl.map((url, index) => (
        <div
          key={index}
          className="flex-shrink-0 h-full flex flex-col justify-center items-center"
        >
          <img src={url} className="w-[139px] rounded-lg" alt="ProjectImage" />
        </div>
      ))}
    </div>
  );
};
