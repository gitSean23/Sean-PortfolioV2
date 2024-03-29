/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/agGoURSBSSu
 */
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Album() {
  return (
    <div key="1" className="bg-[#121212] min-h-screen flex flex-col gap-4 p-4">
      <div className="grid gap-2">
        <div className="flex items-center gap-4">
          <Image
            alt="Album cover"
            className="aspect-square rounded-lg overflow-hidden"
            height={200}
            src="/placeholder.svg"
            width={200}
          />

          <div className="grid gap-1">
            <h1 className="text-2xl font-bold leading-none">Contact</h1>
            <h2 className="text-sm font-medium tracking-wide leading-none">
              Sean Feldman
            </h2>
          </div>
        </div>
      </div>
      <div className="flex-1 grid gap-4">
        <div className="flex items-center gap-4">
          <Button className="w-8 h-8" size="icon" variant="outline">
            <ChevronUpIcon className="w-4 h-4" />
          </Button>
          <Button className="w-8 h-8" size="icon" variant="ghost">
            <PlayIcon className="w-4 h-4" />
          </Button>
          <Button className="w-8 h-8" size="icon" variant="outline">
            <HeartIcon className="w-4 h-4" />
          </Button>
          <Button className="w-8 h-8" size="icon" variant="outline">
            <MoreHorizontalIcon className="w-4 h-4" />
          </Button>
        </div>
        <div className="grid gap-4">
          <Song index="1." song="Email" artist="Sean Feldman" />
          <Song index="2." song="LinkedIn" artist="Sean Feldman" />
          <Song index="3." song="GitHub" artist="Sean Feldman" />
          <Song index="4." song="Resume" artist="Sean Feldman" />
        </div>
      </div>
    </div>
  );
}

function ChevronUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function MoreHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  );
}

function Song(props) {
  return (
    <div className="flex items-center gap-4 text-white">
      <div className="text-sm font-medium w-4">{props.index}</div>
      <div className="grid gap-1">
        <h3 className="font-bold leading-none">{props.song}</h3>
        <p className="text-sm font-medium leading-none">{props.artist}</p>
      </div>
      <div className="ml-auto w-8 text-right">
        <Button aria-label="Play" size="icon" variant="ghost">
          <PlayIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
