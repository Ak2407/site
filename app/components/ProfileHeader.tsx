import Image from "next/image";
import { Heading, LinkTag } from "./Typography";
import { ContactItems } from "@/lib/constants";

const ProfileHeader = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Image
        src="/profile.jpeg"
        width={30}
        height={30}
        alt="Akshit Gupta"
        className="transition-all duration-100 hover:grayscale"
      />

      <div className="flex flex-row justify-between w-full ">
        <div className="flex flex-col justify-between w-full ">
          <div className="flex flex-col h-full ">
            <Heading>Akshit Gupta</Heading>
            <p className="text-[14px] text-gray-600 ">
              Typing random stuff until it compiles
              <span></span>
            </p>
          </div>
        </div>

        <div className="flex flex-col mr-4 ">
          {ContactItems.filter(
            (item) => item.title === "Twitter" || item.title === "Github",
          ).map((item, index) => (
            <LinkTag key={index} external href={item.url}>
              {item.title.toLowerCase()}
            </LinkTag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
