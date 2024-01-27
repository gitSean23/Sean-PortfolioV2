import { myAlbums } from "@/albums";
import Image from "next/image";
import Link from "next/link";

export default function Experience() {
  return (
    <div className=" bg-black overflow-hidden flex flex-col min-h-screen">
      <div className=" inline-flex relative top-8 mx-8 ">
        <Image alt={myAlbums[0].name} src={myAlbums[0].cover}></Image>
        <h3 className="relative top-48 mx-5">Sean Dev</h3>
        <h3 className="relative top-48">|</h3>
        <h3 className="relative top-48 mx-5">Experience</h3>
      </div>
      <div className="mx-20 relative top-24 bg-black">
        <div className=" inline-flex gap-96">
          <Link href="https://github.com/gitSean23?tab=repositories">NASA</Link>
          <p>Software Engineer Intern</p>
        </div>
        <br></br>
        <br></br>
        <div className=" inline-flex gap-80">
          <Link href="https://github.com/gitSean23?tab=repositories">
            Knight Hacks
          </Link>
          <p className=" relative left-2">Software Engineer</p>
        </div>
        <br></br>
        <br></br>
        <div className=" inline-flex gap-80">
          <Link href="https://github.com/gitSean23?tab=repositories">
            Wear-Lab
          </Link>
          <p className=" relative left-9">Software Engineer</p>
        </div>
      </div>
    </div>
  );
}
