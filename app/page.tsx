import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import { PageLoadAnimation } from "./components/page-load";
import GithubChart from "./components/GithubChart";
import AboutSection from "./components/AboutSection";
import ProfileHeader from "./components/ProfileHeader";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-row gap-10 justify-center ">
      <PageLoadAnimation>
        <ProfileHeader />
        <GithubChart />
        <AboutSection />
        <Projects />
        <Experience />
        <Blogs />
        <Contact />
      </PageLoadAnimation>
    </div>
  );
}
