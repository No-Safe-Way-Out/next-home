import {BlogData} from "@/lib/BlogData";
import parse from "node-html-parser";

export interface BlogTitlesPostData {
    blogs: BlogData[]
}

export async function POST(request: Request) {
    const {blogs} : BlogTitlesPostData = await request.json();
    const titles: string[] = [];
    for (const blog of blogs) {
        const res = await fetch(blog.loc, {method: "GET"});
        const data = await res.text();
        const doc = parse(data);
        titles.push(doc.querySelector('h1')?.text.trim() ?? "");
    }
    return new Response(JSON.stringify(titles), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'max-age=3600',
        }
    });
}
