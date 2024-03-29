import { Button } from "@/components/ui/button";
import { myAlbums } from "@/albums";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-hidden flex flex-col min-h-screen bg-black">
      <h1 className="mx-2 text-4xl">Sean Dev</h1>
      <Button variant="link" className="w-full justify-start mx-2 text-lg">
        Neon
      </Button>
      <Button variant="link" className="w-full justify-start mx-2 text-lg">
        Resume
      </Button>
      <Button variant="link" className="w-full justify-start mx-2 text-lg">
        Experience
      </Button>
      <Button variant="link" className="w-full justify-start mx-2 text-lg">
        About Me
      </Button>
      <br></br>
      <br></br>
      <br></br>
      <h1 className="mx-10 text-4xl">Work</h1>
      <div className="flex flex-wrap mx-2 gap-20 p-9 ">
        {myAlbums.map((data, key) => (
          <div
            key={key}
            className=" hover:bg-gray-700 rounded-md border-black border-14 hover:border-gray-700"
          >
            <Link key={key} href={data.url} className="">
              <Image
                alt={data.name}
                src={data.cover}
                placeholder="blur"
              ></Image>
              <p className="relative top-3">{data.name}</p>
            </Link>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
      <h1 className="mx-10 text-4xl">About Me</h1>
    </div>
  );
}
