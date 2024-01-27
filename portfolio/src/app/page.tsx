import { Button } from "@/components/ui/button";
import { myAlbums } from "@/albums";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-hidden flex flex-col min-h-screen bg-black">
      <h1 className="mx-2 text-4xl">Sean Dev</h1>
      <Button variant="link" className="w-full justify-start mx-2">
        Neon
      </Button>
      <Button variant="link" className="w-full justify-start mx-2">
        Resume
      </Button>
      <Button variant="link" className="w-full justify-start mx-2">
        Experience
      </Button>
      <Button variant="link" className="w-full justify-start mx-2">
        About Me
      </Button>
      <br></br>
      <br></br>
      <br></br>
      <h1 className="mx-10 text-4xl">Work</h1>
      <div className="flex flex-wrap mx-2 gap-20 p-9">
        {myAlbums.map((data, key) => (
          <Link key={key} href={data.url}>
            <Image alt={data.name} src={data.cover} placeholder="blur"></Image>
            <p className="relative top-3">{data.name}</p>
          </Link>
        ))}
      </div>
      <br></br>
      <br></br>
      <h1 className="mx-10 text-4xl">About Me</h1>
    </div>
  );
}
