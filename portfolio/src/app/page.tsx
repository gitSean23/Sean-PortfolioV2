import { Button } from "@/components/ui/button";
import { myAlbums } from "@/albums";

export default function Home() {
  return (
    <div className="overflow-hidden">
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
      <h1 className="mx-2 text-4xl">Work</h1>
      {myAlbums.map((data, key) => (
        <Button key={key}>{data.name}</Button>
      ))}
    </div>
  );
}
