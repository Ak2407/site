"use client";
import Image from "next/image";
import { Heading, LinkTag } from "./Typography";
import { ContactItems } from "@/lib/constants";
import { useEffect, useState } from "react";

const ProfileHeader = () => {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (shake) {
      const interval = setInterval(() => {
        document.body.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
      }, 50);
      setTimeout(() => {
        clearInterval(interval);
        document.body.style.transform = "translate(0,0)";
        setShake(false);
      }, 2000);
    }
  }, [shake]);

  return (
    <div className="flex flex-col gap-2 w-full">
      <Image
        src="/profile.jpeg"
        width={30}
        height={30}
        alt="Akshit Gupta"
        className="transition-all duration-100 hover:grayscale cursor-pointer"
        onClick={() => setShake(true)}
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
