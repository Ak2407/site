import { ContactItems } from "@/lib/constants";
import { Legend, LinkTag, SubHeading } from "./Typography";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="flex flex-col gap-10 w-full border-b-[1px] border-gray-200 border-dashed pb-10"
    >
      <SubHeading underline>Contact</SubHeading>
      <div className="flex flex-col gap-4 w-full pl-0">
        {ContactItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row justify-start items-start gap-2 lg:gap-10 w-full"
          >
            <Legend>{item.title}</Legend>

            <div className="flex flex-col gap-1 ">
              <div className=" flex flex-row items-center gap-4 w-full ">
                <LinkTag href={item.url} external>
                  {item.name}
                </LinkTag>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
