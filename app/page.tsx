import {
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./components/Sidebar";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div
      className="w-full min-h-screen flex flex-row gap-10 justify-center  "
      id="Home"
    >
      <Sidebar />
      <div className="max-w-[700px]  flex flex-col gap-10 items-start pt-10 px-10 sm:pt-20 sm:px-8 border-0 lg:border-x min-h-screen">
        <ProfileHeader />

        <AboutMe />
        <Projects />
      </div>
    </div>
  );
}

const SocialLinks = () => {
  return (
    <div className="flex w-full items-center justify-center gap-10 ">
      <TwitterIcon className="w-5 h-5 text-gray-400 hover:text-blue-300 cursor-pointer" />
      <LinkedinIcon className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
      <GithubIcon className="w-5 h-5 text-gray-400 hover:text-gray-900 cursor-pointer" />
      <MailIcon className="w-5 h-5 text-gray-400 hover:text-red-300 cursor-pointer" />
    </div>
  );
};

const AboutMe = () => {
  return (
    <div className="space-y-2">
      <h1 className="text-sm">About</h1>
      <p className="text-sm/6 text-gray-600 tracking-wide">
        I’m a 22-year-old full-stack developer with a passion for designing and
        building things. When I’m not in the terminal, you’ll probably find me
        gaming, reading, or fine-tuning my Neovim setup. Here is my{" "}
        <span className="group">
          <Link
            className="text-blue-500 hover:underline underline-offset-2 hover:text-blue-400"
            href="https://github.com/Ak2407"
          >
            tech stack
          </Link>
          <ArrowUpRightIcon
            className="w-4 h-4 text-blue-400 hidden group-hover:inline-block "
            strokeWidth={1}
          />
        </span>
      </p>
    </div>
  );
};

const ProfileHeader = () => {
  return (
    <div className="flex items-center gap-4 ">
      <Image
        src="/profile.jpeg"
        width={92}
        height={92}
        alt="Akshit Gupta"
        className="rounded-full"
      />

      <div className="flex flex-col justify-between  ">
        <div className="flex flex-col h-full ">
          <h1 className="text-[20px] ">Akshit Gupta</h1>
          <p className="text-[14px] text-gray-600 ">
            Full stack developer, working remotely.
            <span></span>
          </p>
        </div>
      </div>
    </div>
  );
};
