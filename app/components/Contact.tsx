import { ContactItems } from "@/lib/constants";
import { ArrowUpRightIcon } from "lucide-react";

const Contact = () => {
  return (
    <div id="Contact" className="flex flex-col gap-10 w-full">
      <h1 className="underline underline-offset-4 decoration-wavy decoration-gray-300">
        Contact
      </h1>
      <div className="flex flex-col gap-4 w-full pl-0">
        {ContactItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-10 w-full"
          >
            <p className="min-w-[150px] text-sm text-gray-400 ">{item.title}</p>

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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
