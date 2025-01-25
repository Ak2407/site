import Image from "next/image";

export default function Home() {
  return (
    <div>
      <ProfileHeader />
    </div>
  );
}

const ProfileHeader = () => {
  return (
    <div>
      <Image src="/profile.jpeg" width={92} height={92} alt="Akshit Gupta" />
      <h1 className="">Akshit Gupta</h1>
      <p>Full stack developer, India </p>
    </div>
  );
};
