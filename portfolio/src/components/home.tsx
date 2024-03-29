/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/FxeUvcptVxf
 */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";

import { AvatarImage, Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";

export function Home() {
  return (
    <div className="bg-[#121212] text-white min-h-screen">
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500 p-8">
        <div className="pt-4">
          <Badge variant="secondary">
            <VerifiedIcon className="h-8 w-8 p-1" />
            Verified Developer
          </Badge>
          <h1 className="text-6xl font-bold">Sean Feldman</h1>
          <p className="text-xl">1,234,567 monthly listeners</p>
        </div>
      </div>
      <div className="px-8 py-4">
        <div className="flex items-center space-x-4">
          <Button className="rounded-full border" size="icon" variant="ghost">
            <ChevronLeftIcon className="h-4 w-4" />
            <span className="sr-only">Previous</span>
          </Button>
          <Button className="rounded-full border" size="icon" variant="ghost">
            <ChevronRightIcon className="h-4 w-4" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold">Popular</h2>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <span className="text-white">1</span>
                <MusicIcon className="text-green-500" />
                <span className="text-white">Project Showcase</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-400">123,456,789</span>
                <span className="text-gray-400">3:20</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <span className="text-white">2</span>
                <MusicIcon className="text-green-500" />
                <span className="text-white">Summer Vibes</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-400">109,876,543</span>
                <span className="text-gray-400">2:45</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <span className="text-white">3</span>
                <MusicIcon className="text-green-500" />
                <span className="text-white">City Lights</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-400">98,765,432</span>
                <span className="text-gray-400">4:20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#121212]">
        <div className="grid md:grid-cols-3 items-start gap-4 w-full px-4 md:px-6 py-4 md:py-10">
          <div className="space-y-2 md:col-span-2">
            <h1 className="text-3xl font-bold">Discography</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              These are some of the developer's most popular releases.
            </p>
          </div>
          <div className="flex items-start justify-end space-x-4">
            <Button className="rounded-full" size="icon" variant="outline">
              <HeartIcon className="h-6 w-6" />
              <span className="sr-only">Like</span>
            </Button>
            <Button className="rounded-full" size="icon" variant="outline">
              <StarIcon className="h-6 w-6" />
              <span className="sr-only">Add to Library</span>
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-6 pb-4 md:pb-10">
          <div className="group flex flex-col rounded-lg overflow-hidden shadow-sm">
            <Link href={"https://github.com/gitSean23?tab=repositories"}>
              <Image
                alt="Experience"
                height={300}
                src="/placeholder.svg"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
                width={300}
              />

              <div className="p-4">
                <h3 className="font-bold leading-none">Experience</h3>
              </div>
            </Link>
          </div>
          <div className="group flex flex-col rounded-lg overflow-hidden shadow-sm">
            <Image
              alt="Projects"
              height={300}
              src="/placeholder.svg"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
              width={300}
            />
            <div className="p-4">
              <h3 className="font-bold leading-none">Projects</h3>
            </div>
          </div>
          <div className="group flex flex-col rounded-lg overflow-hidden shadow-sm">
            <Link href={"contact"}>
              <Image
                alt="Contact"
                height={300}
                src="/placeholder.svg"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
                width={300}
              />
              <div className="p-4">
                <h3 className="font-bold leading-none">Contact</h3>
              </div>
            </Link>
          </div>
          <div className="group flex flex-col rounded-lg overflow-hidden shadow-sm">
            <Image
              alt="About Me"
              height={300}
              src="/placeholder.svg"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
              width={300}
            />
            <div className="p-4">
              <h3 className="font-bold leading-none">About Me</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronLeftIcon(props) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function MusicIcon(props) {
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
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
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

function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function VerifiedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <circle cx="24" cy="24" r="20" fill="#4dd0e1"></circle>
      <path
        fill="#fff"
        d="M22.491,30.69c-0.576,0-1.152-0.22-1.591-0.659l-6.083-6.084c-0.879-0.878-0.879-2.303,0-3.182 c0.878-0.879,2.304-0.879,3.182,0l6.083,6.084c0.879,0.878,0.879,2.303,0,3.182C23.643,30.47,23.067,30.69,22.491,30.69z"
      ></path>
      <path
        fill="#fff"
        d="M22.491,30.69c-0.576,0-1.152-0.22-1.591-0.659c-0.879-0.878-0.879-2.303,0-3.182l9.539-9.539 c0.878-0.879,2.304-0.879,3.182,0c0.879,0.878,0.879,2.303,0,3.182l-9.539,9.539C23.643,30.47,23.067,30.69,22.491,30.69z"
      ></path>
    </svg>
  );
}
