import { BlogItems } from "@/lib/constants";
import { Legend, LinkTag, SubHeading } from "./Typography";

const Blogs = () => {
  return (
    <div
      id="Blogs"
      className="flex flex-col gap-8 w-full border-b-[1px] border-gray-200 border-dashed pb-10"
    >
      <SubHeading underline>Blogs</SubHeading>
      <div className="flex flex-col gap-4 w-full pl-0">
        {BlogItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-10 w-full"
          >
            <Legend>{item.date}</Legend>

            <div className="flex flex-col gap-1 ">
              <div className=" flex flex-row items-center gap-4 w-full ">
                <LinkTag href={item.url}>{item.title}</LinkTag>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
