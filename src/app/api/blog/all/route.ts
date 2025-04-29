import {BlogData} from "@/lib/BlogData";
import parse from "node-html-parser";

export async function GET(request: Request) {
    const res = await fetch("https://blog.createchstudio.com/sitemap.xml", {
        method: "GET"
    });
    const data = await res.text();
    const doc = parse(data);
    const urls = doc.getElementsByTagName('url');
    const blogs: BlogData[] = [];
    for (let i = 0; i < urls.length; i++) {
        const item = urls[i];
        if (item) {
            const blog: BlogData = {
                loc: item.getElementsByTagName("loc")[0].textContent ?? "",
                lastmod: item.getElementsByTagName("lastmod")[0].textContent ?? "",
                changefreq: item.getElementsByTagName("changefreq")[0].textContent ?? "",
                priority: parseFloat(item.getElementsByTagName("priority")[0].textContent ?? "0")
            };
            if (blog.loc.includes('posts')) {
                blogs.push(blog);
            }
        }
    }
    blogs.sort((a, b) => a.priority - b.priority);
    return new Response(JSON.stringify(blogs), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'max-age=3600',
        }
    });
}
