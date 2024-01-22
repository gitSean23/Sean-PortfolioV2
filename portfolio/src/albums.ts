import { StaticImageData } from "next/image"
import americanDream from "../public/americanDream.jpeg"

export interface Album {
    name: string,
    cover: StaticImageData,
    url: string
}

export const myAlbums: Album[] = [
    {
        name: "Experience",
        cover: americanDream,
        url: "lol.html"
    },

    {
        name: "Projects",
        cover: americanDream,
        url: "lol.html"
    },

    {
        name: "Contact",
        cover: americanDream,
        url: "lol.html"
    }
]