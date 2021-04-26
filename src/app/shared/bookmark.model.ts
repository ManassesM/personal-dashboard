import { v4 as uuv4id } from 'uuid';

export class Bookmark {
    id: string
    name: string
    url: URL

    constructor(name: string, url: string) {
        this.id = uuv4id()
        this.url = new URL(url)

        if(!name) name = this.url.hostname
        this.name = name
    }
}