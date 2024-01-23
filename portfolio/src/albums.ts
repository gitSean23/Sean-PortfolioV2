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
        url: "experience"
    },

    {
        name: "Projects",
        cover: americanDream,
        url: "projects"
    },

    {
        name: "Contact",
        cover: americanDream,
        url: "contact"
    }
]